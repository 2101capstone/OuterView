import * as faceapi from 'face-api.js'

//Load all the facial models into memory
export const loadModels = () => {
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ])
}

export const runFacialRec = async () => {
  let reactions = []
  const detections = await faceapi
    .detectAllFaces('cam', new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()
  if (detections.length) {
    console.log('Detected!')
    reactions.push(detections[0].expressions)
  } else {
    console.log('No Face here!')
  }
}
