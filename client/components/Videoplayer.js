import React, {useState, useEffect, useRef, useCallback} from 'react'
import Webcam from 'react-webcam'
import {
  loadModels,
  runFacialRec,
  startRecording,
  stopRecording
} from './vidHelperFunc'

const Videoplayer = () => {
  const [isFaceRec, setIsFaceRec] = useState(null)
  const [intervalId, setIntervalId] = useState('')
  const [timer, setTimer] = useState(0)
  const [recordedChunks, setRecordedChunks] = React.useState([])
  const videoRef = useRef(null)
  let mediaRecorderRef = useRef(null)

  //load models with first render
  useEffect(() => {
    console.log('Face Models Loaded')
    loadModels()
  }, [])

  //if isFaceRec, then run facial recognition, start recording
  useEffect(() => {
    console.log('Face Detecting: ', isFaceRec)
    if (isFaceRec) {
      setIntervalId(setInterval(runFacialRec, 2000))
      mediaRecorderRef = startRecording(videoRef, mediaRecorderRef)
    } else if (isFaceRec === false) {
      mediaRecorderRef = stopRecording(mediaRecorderRef)
      clearInterval(intervalId)
    }
  }, [isFaceRec])

  return (
    <div>
      <h3>
        {isFaceRec ? 'Face Recognition is On!' : 'Face Recognition is Off!'}
      </h3>
      <h5>Timer: {timer}</h5>
      <div>
        <Webcam ref={videoRef} audio={true} width={640} height={480} id="cam" />
      </div>
      <button
        type="button"
        onClick={() => setIsFaceRec(prevState => !prevState)}
      >
        {isFaceRec ? 'End Recording' : 'Start Recording'}
      </button>
    </div>
  )
}

export default Videoplayer
