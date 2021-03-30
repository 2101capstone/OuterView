import React from 'react'

const LearnMore = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">About OuterView</h1>
        <p className="lead">
          We Utilize Facial recognition and Voice recognition to track as you
          are recording to identify commonly used Filler Words in your speaking
          to help improve your interviews.
        </p>
      </div>
      <h1 id="h1-developers">Developers</h1>
      <div className="card-group">
        <div className="card">
          <img
            className="card-img-top"
            src="icon-user.png"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Mike Busto</h5>
            <p className="card-text">github</p>
            <p className="card-text">linkedin</p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="icon-user.png"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Kush Patel</h5>
            <p className="card-text">github</p>
            <p className="card-text">linkedin</p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="icon-user.png"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Chuck Lucas</h5>
            <p className="card-text">github</p>
            <p className="card-text">linkedin</p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="icon-user.png"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Benny Koker</h5>
            <p className="card-text">github</p>
            <p className="card-text">linkedin</p>
          </div>
        </div>
      </div>
      <section id="section-c">
        <div className="box-1">
          <h1 className="recognition-h1">Speech Recognition</h1>
          <ul>
            <li>
              Step 1: Voice detection The microphone detects sound and audio
              input as you begin speaking and ends on a break of audio input.
            </li>

            <li>
              Step 2: Voice analysis, our software breaks your speech down into
              bits it can interpret, converts it into a digital format, and
              analyzes the pieces of content.
            </li>

            <li>
              Step 3: Converting the sound to data, after speech ends our
              application makes determinations based on programming and speech
              patterns, making hypotheses about what the user is actually
              saying. After determining what the users most likely said, the
              software transcribes the conversation into text.
            </li>
          </ul>
        </div>
        <div className="box-2">
          <h1 className="recognition-h1">Facial Recognition</h1>
          <ul>
            <li>
              Step 1: Voice detection The microphone detects sound and audio
              input as you begin speaking and ends on a break of audio input.
            </li>

            <li>
              Step 2: Voice analysis, our software breaks your speech down into
              bits it can interpret, converts it into a digital format, and
              analyzes the pieces of content.
            </li>

            <li>
              Step 3: Converting the sound to data, after speech ends our
              application makes determinations based on programming and speech
              patterns, making hypotheses about what the user is actually
              saying. After determining what the users most likely said, the
              software transcribes the conversation into text.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default LearnMore
