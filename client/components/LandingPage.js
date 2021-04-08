import React, {useEffect} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LandingPage = () => {
  useEffect(() => {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      console.log('Chrome Detected')
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

  return (
    <div className="landing-page-div">
      <header id="landingPage">
        <h1 className="landing-page-h1">Welcome to OuterView</h1>
        <p className="moto">Get your OuterView before your next Interview</p>
        <a href="/about" className="button">
          Learn More
        </a>
        <a href="/record" className="button">
          Start
        </a>
      </header>
    </div>
  )
}

export default LandingPage
