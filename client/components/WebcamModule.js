import React, {useEffect, useState} from 'react'
import Videoplayer from './Videoplayer'
import VideoplayerNonChrome from './VideoplayerNonChrome'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//top level module for webcam recording, facial recognition, transcription
const WebcamModule = () => {
  const [isChrome, setIsChrome] = useState(null)

  useEffect(() => {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      setIsChrome(true)
    } else {
      toast.error(
        'Your browser is not fully compatible. Please try visiting on a desktop verison of Google Chrome for the best experience',
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
  }, [])

  return <div>{isChrome ? <Videoplayer /> : <VideoplayerNonChrome />}</div>
}

export default WebcamModule
