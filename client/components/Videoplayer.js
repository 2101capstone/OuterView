import React, {useState, useEffect, useRef} from 'react'
import Webcam from 'react-webcam'
import SpeechToTextV2 from './SpeechToTextV2'
import {
  loadModels,
  runFacialRec,
  startRecording,
  stopRecording,
  handleDownload,
  drawFacePoints
} from './vidHelperFunc'

import {addToFirestore, addToStorage, pushToUserDoc} from './firebaseHelperFunc'
import {
  fillerWords,
  countFiller,
  recognition,
  randomQuestionGenerator
} from './speechHelperFunc'
import Scoring from './Scoring'
import {useAuth} from '../contexts/AuthContext'
import {Button} from 'react-bootstrap'

const Videoplayer = () => {
  const {currentUser} = useAuth() //current user signed in
  const [isRecord, setisRecord] = useState(null) //isRecording
  const [showFace, setShowFace] = useState(null) //not connected
  const [faceId, setFaceId] = useState('')
  const [reactions, setReactions] = useState([])
  const [showTranscript, setShowTranscript] = useState(false)
  const [words, setWords] = useState([]) // TRANSCRIPT!
  const [docId, setDocId] = useState('')
  const [recordedChunks, setRecordedChunks] = useState([])
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  let mediaRecorderRef = useRef(null)
  recognition.continuous = true
  recognition.interimResults = true
  recognition.lang = 'en-US'

  //load models with first render
  useEffect(() => {
    console.log('Face Models Loaded')
    loadModels()
    console.log(currentUser.uid)
  }, [])

  const handleDataAvailable = ({data}) => {
    if (data.size > 0) {
      setRecordedChunks(prev => prev.concat(data))
    }
  }

  //if isRecord, then run facial recognition, start recording
  useEffect(() => {
    let id = null
    if (isRecord) {
      //Start Recording
      id = setInterval(runFacialRec, 200, reactions, setReactions)
      mediaRecorderRef = startRecording(
        videoRef,
        mediaRecorderRef,
        handleDataAvailable
      ) //start video recording
      recognition.start() //start voice Recognition
    } else if (isRecord === false) {
      //END RECORDING

      clearInterval(id)
      mediaRecorderRef = stopRecording(mediaRecorderRef) //stop video recording
      recognition.stop() //ending voice rec
      const transcript = words.join(' ')
      countFiller(transcript)
      console.log('Filler Words:', fillerWords)
      console.log('Transcript:', transcript)
      addToFirestore({transcript, fillerWords, uid: currentUser.uid}).then(
        setDocId
      )
    }
  }, [isRecord])

  //upload video to cloud storage
  useEffect(() => {
    if (docId) {
      addToStorage(recordedChunks, docId)
      console.log('about to push to user doc')
      pushToUserDoc(currentUser.uid, docId)
    }
  }, [docId])

  //On/Off face net
  useEffect(() => {
    if (showFace) {
      setFaceId(setInterval(drawFacePoints, 200))
    } else if (showFace === false) {
      clearInterval(faceId)
      const canvas = document.getElementById('myCanvas')
      canvas.getContext('2d').clearRect(0, 0, 640, 480)
    }
  }, [showFace])

  //to download and submit video
  const handleSubmitClick = () => {
    handleDownload(recordedChunks)
    setRecordedChunks([])
    console.log('Downloaded to local')
  }

  // to join array of words from Transcription
  recognition.onresult = event => {
    //console.log(event.results)
    setWords(
      Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
    )
  }

  return (
    <div>
      {/* <h3>{isRecord ? {seconds} : 'no rec'}</h3> */}
      <div className="camAndCanvas">
        <br></br>
        <canvas ref={canvasRef} id="myCanvas" />
        <Webcam
          ref={videoRef}
          audio={true}
          width={640}
          height={480}
          id="cam"
          className={isRecord ? 'recBorder' : 'noBorder'}
        />
      </div>
      <div className="buttonContainer">
        <div className="recordButton">
          <Button
            id="startStopRec"
            variant="danger"
            onClick={() => setisRecord(prevState => !prevState)}
          >
            {isRecord ? 'End Recording' : 'Start Recording'}
          </Button>
        </div>
        <div className="secondaryButton">
          {isRecord === false ? (
            <Button
              id="finishVid"
              variant="secondary"
              onClick={handleSubmitClick}
            >
              Download
            </Button>
          ) : (
            ''
          )}
          <Button
            id="renderFace"
            variant="secondary"
            onClick={() => setShowFace(prevState => !prevState)}
          >
            Render Face Points
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={randomQuestionGenerator}
          >
            Random Interview Question
          </Button>
          <Button
            variant="secondary"
            onClick={() => setShowTranscript(prevState => !prevState)}
          >
            {showTranscript ? 'Hide Transcription' : 'Live Transcription'}
          </Button>{' '}
        </div>
      </div>
      {showTranscript ? (
        <div>
          <SpeechToTextV2 words={words} isRecord={isRecord} />
        </div>
      ) : (
        <div />
      )}

      {isRecord === false ? (
        <div>
          <Scoring
            transcript={words}
            facialData={reactions}
            fillerWords={fillerWords}
          />
        </div>
      ) : (
        ' '
      )}
      <div>{docId}</div>
    </div>
  )
}
export default Videoplayer
