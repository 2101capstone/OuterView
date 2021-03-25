import React, {useState, useEffect} from 'react'
import Webcam from 'react-webcam'
import {loadModels} from './facialRecognition'

const Videoplayer = () => {
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    console.log('Face Models Loaded')
    loadModels()
  }, [])

  return (
    <div>
      <div>
        <Webcam audio={true} width={640} height={480} id="cam" />
      </div>
      <button type="button">Start Recording</button>
    </div>
  )
}

export default Videoplayer
