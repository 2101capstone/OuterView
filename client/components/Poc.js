import React, {useEffect, useRef, useState} from 'react'
import * as faceapi from 'face-api.js'
import Webcam from 'react-webcam'

//kush and chucks proof of concept
const PoC = () => {
  let videoRef = useRef()
  const canvasRef = useRef()
  const [initializing, setInitializing] = useState(false)

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

  // useEffect(() => {
  //   console.log('canvas loaded')
  // }, [canvasRef])

  useEffect(() => {
    //const displaySize = {width: 640, height: 480}
    setInterval(async () => {
      if (initializing) {
        setInitializing(false)
      }
      // canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
      //   videoRef.current
      // )
      //faceapi.matchDimensions(canvasRef.current, displaySize)
      const detections = await faceapi
        .detectAllFaces('cam', new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
      console.log(detections)
      //onst resizedDetections = faceapi.resizeResults(detections, displaySize)
      //canvasRef.current.getContext('2d').clearRect(0, 0, 640, 480)
      // faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
      // faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections)
      // faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
    }, 3000)
  })

  return (
    <div>
      <span>{initializing ? 'Initializing' : 'Ready'}</span>
      <div className="webcam-test">
        <Webcam
          ref={videoRef}
          audio={false}
          width={640}
          height={480}
          id="cam"
        />
      </div>
    </div>
  )
}

export default PoC

// import React, {useEffect, useRef} from 'react'
// import * as faceapi from 'face-api.js'
// import Webcam from 'react-webcam'

// //kush and chucks proof of concept
// const PoC = () => {
//   let videoRef = useRef()
//   const canvasRef = useRef(null)

//   const getVideo = () => {
//     navigator.mediaDevices
//       .getUserMedia({video: {}})
//       .then(stream => {
//         let video = videoRef.current
//         video.srcObject = stream
//         video.play()
//       })
//       .catch(err => {
//         console.error('error:', err)
//       })
//   }

//   const loadModels = () => {
//     Promise.all([
//       faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//       faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//       faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//       faceapi.nets.faceExpressionNet.loadFromUri('/models')
//     ])
//   }

//   //initial load thus the []
//   useEffect(() => {
//     console.log('loaded from the start')
//     loadModels()
//   }, [])

//   //runs when videoRef changes
//   useEffect(() => {
//     getVideo()
//     console.log('models loaded')
//   }, [videoRef])

//   useEffect(() => {
//     const displaySize = {width: 640, height: 480}
//     setInterval(async () => {
//       canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
//         videoRef.current
//       )
//       faceapi.matchDimensions(canvasRef.current, displaySize)
//       const detections = await faceapi
//         .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
//         .withFaceLandmarks()
//         .withFaceExpressions()
//       console.log(detections)
//       const resizedDetections = faceapi.resizeResults(detections, displaySize)
//       canvasRef.current.getContext('2d').clearRect(0, 0, 640, 480)
//       faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
//       faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections)
//       faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
//     }, 100)
//   })

//   return (
//     <div>
//       <div className="webcam-test">
//         <canvas ref={canvasRef} />
//         <video ref={videoRef} />
//       </div>
//     </div>
//   )
// }

// export default PoC
