import * as faceapi from 'face-api.js'
import {storage} from './firebase'
import {useRef, useCallback} from 'react'

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
  const detections = await faceapi
    .detectAllFaces('cam', new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()
  if (detections.length) {
    console.log('Detected!')
    console.log(detections[0].expressions)
    //reactions.push(detections[0].expressions)
  } else {
    console.log('No Face here!')
  }
}

export const handleUpload = file => {
  const today = new Date()
  const strDate = today.toISOString().substring(0, 10)
  const uploadTask = storage.ref(`recording/test${strDate}.webm`).put(file)
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
          console.log('Url of uploaded video: ', url)
        })
    }
  )
}

export const startRecording = (videoRef, mediaRecorderRef) => {
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

const handleDataAvailable = ({data}) => {
  if (data.size > 0) {
    setRecordedChunks(prev => prev.concat(data))
  }
}

export const stopRecording = mediaRecorderRef => {
  console.log('Stop Recording')
  mediaRecorderRef.current.stop()
  return mediaRecorderRef
  //console.log(reactions)
}
