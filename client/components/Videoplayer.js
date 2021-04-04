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
import {
  addToFirestore,
  addToStorage,
  pushToUserDoc,
  getVideoUrl
} from './firebaseHelperFunc'
import {
  fillerWords,
  countFiller,
  recognition,
  randomQuestionGenerator
} from './speechHelperFunc'
import scoring from './Scoring'
import {useAuth} from '../contexts/AuthContext'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

const Videoplayer = () => {
  const history = useHistory()
  const {currentUser} = useAuth() //current user signed in
  const [isRecord, setisRecord] = useState(null) //isRecording
  const [showFace, setShowFace] = useState(null) //not connected
  const [faceId, setFaceId] = useState('')
  const [reactions, setReactions] = useState([])
  const [showTranscript, setShowTranscript] = useState(false)
  const [words, setWords] = useState([]) // TRANSCRIPT!
  const [docId, setDocId] = useState('')
  let [intervalId, setIntervalId] = useState('')
  const [recordedChunks, setRecordedChunks] = useState([])
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  let mediaRecorderRef = useRef(null)
  recognition.continuous = true
  recognition.interimResults = true
  recognition.lang = 'en-US'

  //load models with first render
  useEffect(() => {
    loadModels()
  }, [])

  const handleDataAvailable = ({data}) => {
    if (data.size > 0) {
      setRecordedChunks(prev => prev.concat(data))
    }
  }

  //if isRecord, then run facial recognition, start recording
  useEffect(() => {
    if (isRecord) {
      //Start Recording
      setIntervalId(setInterval(runFacialRec, 200, reactions, setReactions))
      mediaRecorderRef = startRecording(
        videoRef,
        mediaRecorderRef,
        handleDataAvailable
      ) //start video recording
      recognition.start() //start voice Recognition
    } else if (isRecord === false) {
      //END RECORDING
      clearInterval(intervalId)
      mediaRecorderRef = stopRecording(mediaRecorderRef) //stop video recording
      recognition.stop() //ending voice rec
      const transcript = words.join(' ')
      countFiller(transcript)
      let score = scoring(words, fillerWords, reactions)
      addToFirestore({
        transcript,
        fillerWords,
        uid: currentUser.uid,
        score
      }).then(setDocId)
    }
  }, [isRecord])

  //upload video to cloud storage
  useEffect(() => {
    if (docId) {
      addToStorage(recordedChunks, docId)
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
  const handleDownloadClick = () => {
    handleDownload(recordedChunks)
    setRecordedChunks([])
  }

  // to join array of words from Transcription
  recognition.onresult = event => {
    setWords(
      Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
    )
  }

  return (
    <div className="video-div">
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
          {isRecord === false ? (
            <Button
              id="startStopRec"
              variant="danger"
              onClick={() => setisRecord(null)}
            >
              Start Over
            </Button>
          ) : (
            <Button
              id="startStopRec"
              variant="danger"
              onClick={() => setisRecord(prevState => !prevState)}
            >
              {isRecord ? 'End Recording' : 'Start Recording'}
            </Button>
          )}
        </div>
        <div className="secondaryButton">
          {isRecord === false ? (
            <Button
              id="finishVid"
              variant="secondary"
              onClick={handleDownloadClick}
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
    </div>
  )
}
export default Videoplayer
