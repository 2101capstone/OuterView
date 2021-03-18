import React, {useEffect, useRef} from 'react'
import * as faceapi from 'face-api.js'

//kush and chucks proof of concept
const PoC = () => {
  const videoRef = useRef()
  let canvasRef = useRef()

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({video: {}})
      .then(stream => {
        let video = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch(err => {
        console.error('error:', err)
      })
  }

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
    console.log('loaded from the start')
    loadModels()
  }, [])

  //runs when videoRef changes
  useEffect(() => {
    getVideo()
    console.log('models loaded')
  }, [videoRef])

  useEffect(() => {
    const displaySize = {width: 640, height: 480}
    setInterval(async () => {
      canvasRef = faceapi.createCanvasFromMedia(videoRef.current)
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
      console.log(detections)
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
    }, 100)
  })

  return (
    <div>
      <div className="webcam-test">
        <video ref={videoRef} />
        <canvas ref={canvasRef} />
        <button type="submit">Take a picture</button>
      </div>
    </div>
  )
}

export default PoC
