import React, {useState, useEffect, useRef} from 'react'
import Webcam from 'react-webcam'
import {
  loadModels,
  runFacialRec,
  startRecording,
  stopRecording,
  handleDownload
} from './vidHelperFunc'

const Videoplayer = () => {
  const [isFaceRec, setIsFaceRec] = useState(null)
  const [intervalId, setIntervalId] = useState('')
  const [reactions, setReactions] = useState([])
  //const [timer, setTimer] = useState(0)
  const [recordedChunks, setRecordedChunks] = useState([])
  const videoRef = useRef(null)
  let mediaRecorderRef = useRef(null)

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

  //if isFaceRec, then run facial recognition, start recording
  useEffect(() => {
    console.log('Face Detecting: ', isFaceRec)
    if (isFaceRec) {
      setIntervalId(setInterval(runFacialRec, 2000, reactions, setReactions))
      mediaRecorderRef = startRecording(
        videoRef,
        mediaRecorderRef,
        handleDataAvailable
      )
    } else if (isFaceRec === false) {
      console.log('saved reactions:', reactions)
      mediaRecorderRef = stopRecording(mediaRecorderRef)
      clearInterval(intervalId)
    }
  }, [isFaceRec])

  //run when user wants to download and submit video
  const handleSubmitClick = () => {
    handleDownload(recordedChunks)
    setRecordedChunks([])
    console.log('Downloaded to local and Uploaded to Firebase')
  }

  return (
    <div>
      <h3>
        {isFaceRec ? 'Face Recognition and Recording!' : 'Not Recording!'}
      </h3>
      <h5>Timer: 0</h5>
      <div>
        <Webcam ref={videoRef} audio={true} width={640} height={480} id="cam" />
      </div>
      <button
        type="button"
        onClick={() => setIsFaceRec(prevState => !prevState)}
      >
        {isFaceRec ? 'End Recording' : 'Start Recording'}
      </button>
      <div>
        {isFaceRec === false ? (
          <button type="button" onClick={handleSubmitClick}>
            Download and Submit
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
export default Videoplayer
