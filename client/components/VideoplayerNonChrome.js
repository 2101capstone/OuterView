import React, {useState, useEffect, useRef} from 'react'
import Webcam from 'react-webcam'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {loadModels, drawFacePoints} from './vidHelperFunc'
import {randomQuestionGenerator} from './speechHelperFunc'

const VideoplayerNonChrome = () => {
  const [isRecord, setisRecord] = useState(null) //isRecording
  const [showFace, setShowFace] = useState(null) //not connected
  const [faceId, setFaceId] = useState('')
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  //load models with first render
  useEffect(() => {
    loadModels()
  }, [])

  //if isRecord, then run facial recognition, start recording
  useEffect(() => {
    if (isRecord) {
      toast.error(
        'Video reocording is not compatible. Please visit on Google Chrome for the full experience',
        {
          position: 'bottom-right',
          hideProgressBar: false,
          autoClose: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        }
      )
    }
  }, [isRecord])

  //On/Off face net
  useEffect(() => {
    if (showFace) {
      setFaceId(setInterval(drawFacePoints, 200))
    } else if (showFace === false) {
      clearInterval(faceId)
      const canvas = document.getElementById('myCanvas')
      canvas.getContext('2d').clearRect(0, 0, 640, 480)
    }
  }, [showFace])

  return (
    <div className="video-div">
      <div className="camAndCanvas">
        <br></br>
        <canvas ref={canvasRef} id="myCanvas" />
        <Webcam
          ref={videoRef}
          audio={true}
          width={640}
          height={480}
          id="cam"
          className="BlueBorder"
        />
      </div>
      <div className="details-buttons">
        <button
          type="button"
          onClick={() => setisRecord(prevState => !prevState)}
          className="buttonTwoRec"
        >
          Start Recording
        </button>
        <button
          type="button"
          onClick={() => setShowFace(prevState => !prevState)}
          className="buttonRec"
        >
          Render Face Points
        </button>

        <button
          type="button"
          onClick={randomQuestionGenerator}
          className="buttonRec"
        >
          Interview Question
        </button>
        <button
          type="button"
          onClick={() =>
            toast.error('Please visit on Google Chrome for the full experience')
          }
          className="buttonRec"
        >
          Live Transcription
        </button>
      </div>
    </div>
  )
}
export default VideoplayerNonChrome
