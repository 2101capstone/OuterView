import React from 'react'

const LandingPage = () => {
  return (
    <div className="landing-page-div">
      {/* <h2 className="slogan"> Get your Outerview before your next interview</h2>
      <img
        className="landing"
        src="https://venturebeat.com/wp-content/uploads/2018/03/shutterstock_731158624-e1576819636533.jpg?w=1200&strip=all"
      />
      <h3> What is Outerview ?</h3>
      Outerview is a web app that harnesses the power of voice and face
      recognition Software
      <h3> How does it all work?</h3>
      <h5> Facial Data</h5>
      <div className="facialsteps">
        <p>
          Step 1: Face detection The camera detects and locates the image of a
          face. The image may show the person looking straight ahead or in
          profile.
        </p>

        <p>
          Step 2: Face analysis, an image of the face is captured and analyzed.
          The software reads the geometry of your face using a 68 point face
          landmark detector. These models have been trained on a dataset of ~35k
          face images labeled with 68 face landmark points.
        </p>

        <p>
          Step 3: Converting the image to data The face capture process
          transforms analog information (a face) into a set of digital
          information (data) based on the person's facial features. Your face's
          analysis is essentially turned into a mathematical formula. We can
          then use this data to determine facial expressions associated with
          emotions.
        </p>
      </div>
      <h5> Vocie Data</h5>
      <div className="voicesteps">
        <p>
          Step 1: Voice detection The microphone detects sound and audio input
          as you begin speaking and ends on a break of audio input.
        </p>

        <p>
          Step 2: Voice analysis, our software breaks your speech down into bits
          it can interpret, converts it into a digital format, and analyzes the
          pieces of content.
        </p>

        <p>
          Step 3: Converting the sound to data, after speech ends our
          application makes determinations based on programming and speech
          patterns, making hypotheses about what the user is actually saying.
          After determining what the users most likely said, the software
          transcribes the conversation into text.
        </p>
      </div>
      <h2> Voice Analytics</h2>
      <div className="containerLp">
        <div className="analytics">
          <WordCloud transcript={dummy} />
        </div>
      </div>  */}

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
      <section id="section-a">
        <p>
          We Utilize Facial recognition and Voice recognition to track as you
          are recording to identify commonly used Filler Words in your speaking
          to help improve your interviews.
        </p>
      </section>
      <div id="footer-div">
        <footer>@Copyright 2021 All Rights Reserved.</footer>
      </div>
    </div>
  )
}

export default LandingPage
