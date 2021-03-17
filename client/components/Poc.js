import React, {useEffect, useRef} from 'react'

const Poc = () => {
  const videoRef = useRef(null)

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({video: {width: 300}})
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
      hello
      <div className="webcam">
        <video ref={videoRef} />
        <button type="submit">Take a picture</button>
      </div>
    </div>
  )
}

export default Poc
