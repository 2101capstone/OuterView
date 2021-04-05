import React from 'react'

const LandingPage = () => {
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
