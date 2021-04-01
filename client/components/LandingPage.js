import React from 'react'

const LandingPage = () => {
  return (
    <div className="landing-page-div">
      <header id="landingPage">
        <h1 className="landing-page-h1">Welcome To Outerview</h1>
        <p>Get Your Outerview before your next Interview!!</p>
        <a href="/learnmore" className="button">
          Learn More
        </a>
        <a href="/record" className="button">
          Start
        </a>
      </header>
      {/* <section id="section-a">
        <p>
          We Utilize Facial recognition and Voice recognition to track as you
          are recording to identify commonly used Filler Words in your speaking
          to help improve your interviews.
        </p>
      </section> */}
      <div id="footer-div">
        <footer>@Copyright 2021 All Rights Reserved.</footer>
      </div>
    </div>
  )
}

export default LandingPage
