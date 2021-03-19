import React, {useEffect, useRef, useState, useCallback} from 'react'
import * as faceapi from 'face-api.js'
import Webcam from 'react-webcam'

//kush and chucks proof of concept
const PoC = () => {
  let videoRef = useRef(null)
  const canvasRef = useRef(null)
  const mediaRecorderRef = React.useRef(null)
  const [initializing, setInitializing] = useState(false)
  const [capturing, setCapturing] = useState(false)
  const [recordedChunks, setRecordedChunks] = React.useState([])

  //FACE DETECTION
  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ])
  }
  //initial load thus the []
  useEffect(() => {
    console.log('models loaded from the start')
    loadModels()
    setInitializing(true)
  }, [])

  useEffect(() => {
    //const displaySize = {width: 640, height: 480}
    setInterval(async () => {
      if (initializing) {
        setInitializing(false)
      }
      // const canvas = document.getElementById('myCanvas')
      // faceapi.matchDimensions(canvas, displaySize)

      const detections = await faceapi
        .detectAllFaces('cam', new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
      if (detections.length) {
        console.log('Detected!')
        //console.log(detections)
      } else {
        console.log('No Face here!')
      }
      // const resizedDetections = faceapi.resizeResults(detections, displaySize)
      // canvasRef.current.getContext('2d').clearRect(0, 0, 640, 480)
      // faceapi.draw.drawDetections(canvas, resizedDetections)
      // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    }, 100)
  })

  // RECORDING
  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true)
    console.log('started')
    mediaRecorderRef.current = new MediaRecorder(videoRef.current.stream, {
      mimeType: 'video/webm'
    })
    mediaRecorderRef.current.addEventListener(
      'dataavailable',
      handleDataAvailable
    )
    mediaRecorderRef.current.start()
  }, [videoRef, setCapturing, mediaRecorderRef])

  const handleDataAvailable = React.useCallback(
    ({data}) => {
      if (data.size > 0) {
        setRecordedChunks(prev => prev.concat(data))
      }
    },
    [setRecordedChunks]
  )

  const handleStopCaptureClick = useCallback(() => {
    console.log('stop')
    mediaRecorderRef.current.stop()
    setCapturing(false)
  }, [mediaRecorderRef, videoRef, setCapturing])

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm'
      })
      const url = URL.createObjectURL(blob)
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
      <span>{initializing ? 'Initializing' : 'Ready'}</span>
      <div className="webcam-test">
        <canvas ref={canvasRef} id="myCanvas" />
        <Webcam
          ref={videoRef}
          audio={false}
          width={640}
          height={480}
          id="cam"
        />
        <div>
          {capturing ? (
            <button type="button" onClick={handleStopCaptureClick}>
              Stop Capture
            </button>
          ) : (
            <button type="button" onClick={handleStartCaptureClick}>
              Start Capture
            </button>
          )}
          {recordedChunks.length > 0 && (
            <button type="button" onClick={handleDownload}>
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PoC
