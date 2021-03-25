import React, {useState, useEffect} from 'react'
import Webcam from 'react-webcam'
import {loadModels, runFacialRec} from './vidHelperFunc'

const Videoplayer = () => {
  const [isRec, setIsRec] = useState(false) //changed with button
  const [intervalId, setIntervalId] = useState('')
  const [timer, setTimer] = useState(0)

  //load models with first render
  useEffect(() => {
    console.log('Face Models Loaded')
    loadModels()
  }, [])

  //if isRec, then run facial recognition
  useEffect(() => {
    console.log('at the top', isRec)
    if (isRec) {
      setIntervalId(setInterval(runFacialRec, 2000))
    } else {
      clearInterval(intervalId)
    }
  }, [isRec])

  return (
    <div>
      <h3>{isRec ? 'Now Recording!' : ''}</h3>
      <h5>{isRec ? timer : ''}</h5>
      <div>
        <Webcam audio={true} width={640} height={480} id="cam" />
      </div>
      <button type="button" onClick={() => setIsRec(prevState => !prevState)}>
        {isRec ? 'End Recording' : 'Start Recording'}
      </button>
    </div>
  )
}

export default Videoplayer
