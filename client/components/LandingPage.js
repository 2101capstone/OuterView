import React from 'react'

const LandingPage = () => {
  return (
    <div className="landing-page-div">
      <header id="landingPage">
        <h1 className="landing-page-h1">Welcome To OuterView</h1>
        <p>Get Your OuterView before your next Interview</p>
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
