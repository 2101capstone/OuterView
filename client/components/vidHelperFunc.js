import * as faceapi from 'face-api.js'

let facialData = {counter: 0}
//Load all the facial models into memory
export const loadModels = () => {
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ])
}

//run the facial Recognition when called after button click
export const runFacialRec = async (reactions, setReactions) => {
  const detections = await faceapi
    .detectAllFaces('cam', new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()
  if (detections.length) {
    //console.log('Detected!')
    for (let key in detections[0].expressions) {
      if (facialData[key]) facialData[key] += detections[0].expressions[key]
      else facialData[key] = detections[0].expressions[key]
    }
    facialData.counter++
    console.log('detections Array ---------->', facialData)

    setReactions([...reactions, detections[0].expressions])
    //reactions.push(detections[0].expressions)
  } else {
    console.log('No Face here!')
  }
  //show face net
  const displaySize = {
    width: 640,
    height: 480
  }
  const canvas = document.getElementById('myCanvas')
  faceapi.matchDimensions(canvas, displaySize)
  const resizedDetections = faceapi.resizeResults(detections, displaySize)
  //setCanvasRef(canvasRef.current.getContext('2d').clearRect(0, 0, 640, 480))
  faceapi.draw.drawDetections(canvas, resizedDetections)
  faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
}

//start recording when button is clicked
export const startRecording = (
  videoRef,
  mediaRecorderRef,
  handleDataAvailable
) => {
  console.log('started')
  mediaRecorderRef.current = new MediaRecorder(videoRef.current.stream, {
    mimeType: 'video/webm'
  })
  mediaRecorderRef.current.addEventListener(
    'dataavailable',
    handleDataAvailable
  )
  mediaRecorderRef.current.start()
  return mediaRecorderRef
}

//stop recording when button is clicked
export const stopRecording = mediaRecorderRef => {
  console.log('Stop Recording')
  mediaRecorderRef.current.stop()
  // console.log(reactions)
  return mediaRecorderRef
}

//download the video to local storage. also uplloads to fire storage
export const handleDownload = recordedChunks => {
  if (recordedChunks.length) {
    const blob = new Blob(recordedChunks, {
      type: 'video/webm'
    })
    const url = URL.createObjectURL(blob)
    // const publicUrl = handleUpload(blob)
    // console.log('publicUrl from click', publicUrl)
    //console.log('blob url', url)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style = 'display: none'
    a.href = url
    a.download = 'react-webcam-stream-capture.webm'
    a.click()
    window.URL.revokeObjectURL(url)
  }
}
