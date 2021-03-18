import React, {useEffect, useRef} from 'react'
import * as faceapi from 'face-api.js'

//kush and chucks proof of concept
const PoC = () => {
  const videoRef = useRef(null)

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({video: {width: 500}})
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

  useEffect(() => {
    console.log('hello')
    loadModels()
  }, [])

  useEffect(() => {
    getVideo()
  }, [videoRef])

  return (
    <div>
      <div className="webcam-test">
        <video ref={videoRef} />
        <button type="submit">Take a picture</button>
      </div>
    </div>
  )
}

export default PoC
