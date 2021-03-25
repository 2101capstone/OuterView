import React, {useState, useEffect, useRef, useCallback} from 'react'
import Webcam from 'react-webcam'
import {
  loadModels,
  runFacialRec,
  startRecording,
  stopRecording,
  handleUpload
} from './vidHelperFunc'

const Videoplayer = () => {
  const [isFaceRec, setIsFaceRec] = useState(null)
  const [intervalId, setIntervalId] = useState('')
  const [timer, setTimer] = useState(0)
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
      setIntervalId(setInterval(runFacialRec, 2000))
      mediaRecorderRef = startRecording(
        videoRef,
        mediaRecorderRef,
        handleDataAvailable
      )
    } else if (isFaceRec === false) {
      mediaRecorderRef = stopRecording(mediaRecorderRef)
      clearInterval(intervalId)
    }
  }, [isFaceRec])

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm'
      })
      const url = URL.createObjectURL(blob)
      handleUpload(blob)
      console.log('blob url', url)
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style = 'display: none'
      a.href = url
      a.download = 'react-webcam-stream-capture.webm'
      a.click()
      window.URL.revokeObjectURL(url)
      setRecordedChunks([])
    }
  }, [recordedChunks])

  return (
    <div>
      <h3>
        {isFaceRec ? 'Face Recognition and Recording!' : 'Not Recording!'}
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
      <div>
        {isFaceRec === false ? (
          <button type="button" onClick={handleDownload}>
            Download
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

export default Videoplayer
