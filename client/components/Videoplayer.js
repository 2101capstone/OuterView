import React, {useState, useEffect} from 'react'
import Webcam from 'react-webcam'
import {loadModels, runFacialRec} from './facialRecognition'

const Videoplayer = () => {
  const [isRec, setIsRec] = useState(false) //changed with button
  const [intervalId, setIntervalId] = useState('')

  //load models with first render
  useEffect(() => {
    console.log('Face Models Loaded')
    loadModels()
  }, [])

  //run facial recognition on the camera feed. refresh every 2 seconds
  useEffect(() => {
    console.log('at the top', isRec)
    if (isRec) {
      setIntervalId(setInterval(runFacialRec, 1000))
      //console.log(isRec)
    } else {
      //turn off face recog
      clearInterval(intervalId)
    }
  }, [isRec])

  return (
    <div>
      <div>
        <Webcam audio={true} width={640} height={480} id="cam" />
      </div>
      <button type="button" onClick={() => setIsRec(prevState => !prevState)}>
        {isRec ? 'End True' : 'Start False'}
        Recording
      </button>
    </div>
  )
}

export default Videoplayer
