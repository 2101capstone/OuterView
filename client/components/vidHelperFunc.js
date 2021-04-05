import * as faceapi from 'face-api.js'
import firebase, {storage} from './firebase'

let facialData = {counter: 0}
//Load all the facial models into memory
export const loadModels = () => {
  // try {
  //   Promise.all([
  //     faceapi.nets.tinyFaceDetector.loadFromUri(
  //       'gs://interviewprep-fsa.appspot.com/static/models'
  //     ),
  //     faceapi.nets.faceLandmark68Net.loadFromUri(
  //       'gs://interviewprep-fsa.appspot.com/static/models'
  //     ),
  //     faceapi.nets.faceRecognitionNet.loadFromUri(
  //       'gs://interviewprep-fsa.appspot.com/static/models'
  //     ),
  //     faceapi.nets.faceExpressionNet.loadFromUri(
  //       'gs://interviewprep-fsa.appspot.com/static/models'
  //     )
  //   ])
  // } catch (error) {
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ])
  // }
}

//run the facial Recognition when called after button click
export const runFacialRec = async (reactions, setReactions) => {
  const detections = await faceapi
    .detectAllFaces('cam', new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()
  if (detections.length) {
    setReactions([...reactions, detections[0].expressions])
    reactions.push(detections[0].expressions)
  }
}

//start recording when button is clicked
export const startRecording = (
  videoRef,
  mediaRecorderRef,
  handleDataAvailable
) => {
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
  mediaRecorderRef.current.stop()
  return mediaRecorderRef
}

//download the video to local storage. also uplloads to fire storage
export const handleDownload = recordedChunks => {
  if (recordedChunks.length) {
    const blob = new Blob(recordedChunks, {
      type: 'video/webm'
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style = 'display: none'
    a.href = url
    a.download = 'OuterView.webm'
    a.click()
    window.URL.revokeObjectURL(url)
  }
}

export const drawFacePoints = async () => {
  const detections = await faceapi
    .detectAllFaces('cam', new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()
  //show face net
  const displaySize = {
    width: 640,
    height: 480
  }
  const canvas = document.getElementById('myCanvas')
  faceapi.matchDimensions(canvas, displaySize)
  const resizedDetections = faceapi.resizeResults(detections, displaySize)

  faceapi.draw.drawDetections(canvas, resizedDetections)
  faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
}
