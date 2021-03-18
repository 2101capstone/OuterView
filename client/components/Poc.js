import React, {useEffect, useRef} from 'react'

const PoC = () => {
  const videoRef = useRef(null)

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({video: {width: 500}})
      .then(stream => {
        let video = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch(err => {
        console.error('error:', err)
      })
  }

  useEffect(
    () => {
      getVideo()
    },
    [videoRef]
  )

  return (
    <div>
      <div className="webcam-test">
        <video ref={videoRef} />
        <button type="submit">Take a picture</button>
      </div>
    </div>
  )
}

export default PoC
