import React, {useState, useEffect, useRef} from 'react'
import Webcam from 'react-webcam'
import SpeechToTextV2 from './SpeechToTextV2'
import {
  loadModels,
  runFacialRec,
  startRecording,
  stopRecording,
  handleDownload
} from './vidHelperFunc'
import {addToFirestore, addToStorage} from './firebaseHelperFunc'
import {fillerWords, countFiller, recognition} from './speechHelperFunc'
import Scoring from './Scoring'

const Videoplayer = () => {
  const [isRecord, setisRecord] = useState(null)
  const [showFace, setShowFace] = useState(false) //not connected
  const [intervalId, setIntervalId] = useState('')
  const [reactions, setReactions] = useState([])
  const [showTranscript, setShowTranscript] = useState(false)
  const [words, setWords] = useState([]) // TRANSCRIPT!
  const [docId, setDocId] = useState('')
  //const [timer, setTimer] = useState(0)
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
    }
  }, [isRecord])

  useEffect(() => {
    if (docId) {
      addToStorage(recordedChunks, docId)
    }
  }, [docId])

  //something here to allow turn off and on of face net
  useEffect(() => {
    //console.log('hello from show face')
  }, [showFace])

  //to download and submit video
  const handleSubmitClick = () => {
    // handleDownload(recordedChunks)
    setRecordedChunks([])
    console.log('Downloaded to local')
  }

  // for
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
      <div>
        <canvas ref={canvasRef} id="myCanvas" />
        <Webcam ref={videoRef} audio={true} width={640} height={480} id="cam" />
      </div>
      <div>{docId}</div>
      <button
        id="startStopRec"
        type="button"
        onClick={() => setisRecord(prevState => !prevState)}
      >
        {isRecord ? 'End Recording' : 'Start Recording'}
      </button>
      {isRecord === false ? (
        <div>
          <button id="finishVid" type="button" onClick={handleSubmitClick}>
            Download and Submit
          </button>
          <Scoring transcript={words} facialData={reactions} />
        </div>
      ) : (
        ' '
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
      </button>
      {showTranscript ? (
        <div>
          <SpeechToTextV2 words={words} isRecord={isRecord} />
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  )
}
export default Videoplayer
