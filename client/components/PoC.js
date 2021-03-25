import React, {useEffect, useRef, useState, useCallback} from 'react'
import * as faceapi from 'face-api.js'
import Webcam from 'react-webcam'
import {storage} from './firebase'
import {SpeechToText} from './index'

//kush and chucks proof of concept
const PoC = () => {
  let videoRef = useRef(null)
  const canvasRef = useRef(null)
  const mediaRecorderRef = React.useRef(null)
  const [initializing, setInitializing] = useState(false)
  const [capturing, setCapturing] = useState(false)
  const [recordedChunks, setRecordedChunks] = React.useState([])
  const reactions = []
  //---------FACE DETECTION---------//
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
    // console.log('Capturing--->', capturing)
    if (capturing) {
      setInterval(async () => {
        //this line gets fired off after the capturing stops
        // console.log('Capturing--->', capturing)
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
          // console.log('Detected!')
          reactions.push(detections[0].expressions)
        } else {
          // console.log('No Face here!')
        }
        // const resizedDetections = faceapi.resizeResults(detections, displaySize)
        // canvasRef.current.getContext('2d').clearRect(0, 0, 640, 480)
        // faceapi.draw.drawDetections(canvas, resizedDetections)
        // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
      }, 2000)
    } else {
      setInterval(() => {
        // console.log('Not Recording')
      }, 2000)
    }
  })

  //---------RECORDING---------//
  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true)
    console.log('Capturing started')
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
    console.log('Capturing Stopped!')
    mediaRecorderRef.current.stop()
    setCapturing(false)
    setInitializing(false)
    // console.log(reactions)
  }, [mediaRecorderRef, videoRef, setCapturing, setInitializing])

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm'
      })
      handleUpload(blob)
      const url = URL.createObjectURL(blob)
      console.log('blob url', url)
      // const a = document.createElement('a')
      // document.body.appendChild(a)
      // a.style = 'display: none'
      // a.href = url
      // a.download = 'react-webcam-stream-capture.webm'
      // a.click()
      // window.URL.revokeObjectURL(url)
      setRecordedChunks([])
    }
  }, [recordedChunks])

  const handleUpload = file => {
    const uploadTask = storage.ref('recording/test.webm').put(file)
    uploadTask.on(
      'state_changed',
      snapshop => {},
      error => {
        console.log(error)
      },
      () => {
        storage
          .ref('images')
          .child(test)
          .getDownloadURL()
          .then(url => {
            console.log(url)
          })
      }
    )
  }

  return (
    <div>
      <span>{initializing ? 'Initializing' : 'Ready'}</span>
      <div className="webcam-test">
        <canvas ref={canvasRef} id="myCanvas" />
        <Webcam ref={videoRef} audio={true} width={640} height={480} id="cam" />
        <div>
          {capturing ? (
            <h1>you are now recording!!</h1>
          ) : (
            <h2>You are not recording!!</h2>
          )}
          {recordedChunks.length > 0 && (
            <button type="button" onClick={handleDownload}>
              Upload
            </button>
          )}
        </div>
      </div>
      {/* <div>
        <SpeechToText
          startCapture={handleStartCaptureClick}
          stopCapture={handleStopCaptureClick}
          isCapturing={capturing}
        />
      </div> */}
    </div>
  )
}

export default PoC
