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
import {addToFirestore, addToStorage} from './firebaseHelperFunc'
import {fillerWords, countFiller, recognition} from './speechHelperFunc'

const Videoplayer = () => {
  const [isRecord, setisRecord] = useState(null)
  const [showFace, setShowFace] = useState(null) //not connected
  const [intervalId, setIntervalId] = useState('')
  const [faceId, setFaceId] = useState('')
  const [reactions, setReactions] = useState([])
  const [showTranscript, setShowTranscript] = useState(false)
  const [words, setWords] = useState([]) // TRANSCRIPT!
  const [docId, setDocId] = useState('')
  const [border, setBorder] = useState('noBorder')
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
      setBorder('recordBorder') //red banner around video canvas
    } else if (isRecord === false) {
      //END RECORDING
      clearInterval(intervalId)
      mediaRecorderRef = stopRecording(mediaRecorderRef) //stop video recording
      recognition.stop() //ending voice rec
      const transcript = words.join(' ')
      countFiller(transcript)
      console.log('Filler Words:', fillerWords)
      console.log('Transcript:', transcript)
      addToFirestore(transcript, fillerWords).then(setDocId)
      setBorder('noBorder')
    }
  }, [isRecord])

  //upload video to cloud storage
  useEffect(() => {
    if (docId) {
      addToStorage(recordedChunks, docId)
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
      <h3>{isRecord ? 'Face Recognition and Recording!' : 'Not Recording!'}</h3>
      <h5>Timer: 0</h5>
      <div className="camAndCanvas">
        <canvas ref={canvasRef} id="myCanvas" />
        <Webcam
          ref={videoRef}
          audio={true}
          width={640}
          height={480}
          id="cam"
          className={border}
        />
      </div>
      <div className="buttonContainer">
        <div>
          <button
            id="startStopRec"
            type="button"
            onClick={() => setisRecord(prevState => !prevState)}
          >
            {isRecord ? 'End Recording' : 'Start Recording'}
          </button>
        </div>
        <div>
          {isRecord === false ? (
            <button id="finishVid" type="button" onClick={handleSubmitClick}>
              Download and Submit
            </button>
          ) : (
            ''
          )}
          <button
            id="renderFace"
            type="button"
            onClick={() => setShowFace(prevState => !prevState)}
          >
            Render Face Points
          </button>
          <button
            type="button"
            onClick={() => setShowTranscript(prevState => !prevState)}
          >
            {showTranscript ? 'Hide Transcription' : 'Show Transcription'}
          </button>{' '}
        </div>
      </div>
      {showTranscript ? (
        <SpeechToTextV2 words={words} isRecord={isRecord} />
      ) : (
        <div />
      )}
      <div>{docId}</div>
    </div>
  )
}
export default Videoplayer
