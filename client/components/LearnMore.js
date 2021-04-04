import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const LearnMore = () => {
  return (
    <div className="learnMore-border">
      <div className="jumbotron">
        <h1 className="display-4">Outerview</h1>
        <p className="lead">
          Outerview utilizes facial and speech recognition to quantify and
          visualize a user's observable mannerisms. With the assistance of
          recording sessions, our application can help identify commonly used
          filler words in conjunction with detectable facial emotions to create
          a cohesive score. Our goal is to help a user better interpret their
          OuterView before their next interview.
        </p>
      </div>
      <section id="section-c">
        <div className="box-1">
          <h1 className="recognition-h1">Speech Recognition</h1>
          <br></br>
          <ul className="recognition-bullets">
            <li>
              Step 1: Audio detection - The microphone detects sound and audio
              input as you begin speaking and ends on a break of audio input.
            </li>{' '}
            <br></br>
            <li>
              Step 2: Audio analysis - Our software breaks your speech down into
              bits it can interpret, converts it into a digital format, and
              analyzes the pieces of content.
            </li>{' '}
            <br></br>
            <li>
              Step 3: Converting the audio to data - After speech ends our
              application makes determinations based on programming and speech
              patterns, making hypotheses about what the user is actually
              saying. After determining what the users most likely said, the
              software transcribes the conversation into text.
            </li>
          </ul>
        </div>
        <div className="box-2">
          <h1 className="recognition-h1">Facial Recognition</h1>
          <br></br>
          <ul className="recognition-bullets">
            <li>
              Step 1: Face detection - The camera detects and locates the image
              of a face. The image may show the person looking straight ahead or
              in profile.
            </li>
            <br></br>
            <li>
              Step 2: Face analysis - An image of the face is captured and
              analyzed. The software reads the geometry of your face using a 68
              point face landmark detector. These models have been trained on a
              dataset of ~35k face images labeled with 68 face landmark points.
            </li>
            <br></br>
            <li>
              Step 3: Converting the image to data - The face capture process
              transforms analog information (a face) into a set of digital
              information based on the person's facial features. Your face's
              analysis is essentially turned into a mathematical formula. We can
              then use this data to determine facial expressions associated with
              emotions.
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <hr></hr>
      <div className="tech-div">
        <h1 id="h1-developers">Tech Explained</h1>
        <div className="card-group">
          <div className="card">
            <img src="react-js-header.png" />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <ul className="card-bullets">
                <li>Open-source, front end, JavaScript library</li>
                <li>Builds user interfaces and interactive UI components</li>
                <li>Efficent rendering,</li>
                <li>
                  Rich and dynamic single page and mobile applications, all
                  written with both the user anddeveloper in mind
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="reacthooks.png" />
            <div className="card-body">
              <h5 className="card-title">React Hooks</h5>
              <ul className="card-bullets">
                <li>
                  React Hooks are functions that can use React state and
                  lifecycle features from function components without writing a
                  class
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="firebase.png" />
            <div className="card-body">
              <h5 className="card-title">FireBase</h5>
              <ul className="card-bullets">
                <li> Flexible, scalable NoSQL cloud database</li>
                <li>
                  Stores and syncs data for client and server-side development
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="face-api.png" />
            <div className="card-body">
              <h5 className="card-title">face-api.js</h5>
              <ul className="card-bullets">
                <li>
                  JavaScript API for face detection and recognition in the
                  browser
                </li>
                <li>
                  Implemented on top of the TensorFlow.js Machine Learning
                  library
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="webspeech.png" />
            <div className="card-body">
              <h5 className="card-title">Web Speech API</h5>
              <ul className="card-bullets">
                <li>Enables voice data to be incorporated into web apps</li>
                <li> Utilizes SpeechSynthesis (Text-to-Speech)</li>
                <li>
                  Utilizes SpeechRecognition (Asynchronous Speech Recognition)
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="bootstrap.gif" />
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <ul className="card-bullets">
                <li>Open-source CSS framework</li>
                <li>Responsive, mobile-first front-end web development.</li>
                <li>CSS and JavaScript-based design templates</li>
                <li>
                  Templates include typography, forms, buttons, navigation, and
                  other interface components.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-div">
        <h1 id="h1-developers">Developers</h1>
        <div className="card-group">
          <div className="card">
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fmike.jpeg?alt=media&token=fc400c08-e01c-45ce-a3cc-b36fe6837eed"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Mike Busto</h5>
              <div className="icons">
                <a className="icon" href="https://github.com/MBusto4">
                  <FaGithub color="black" size={25} />
                </a>
                <a href="https://www.linkedin.com/in/michael-busto/">
                  <FaLinkedin color="blue" size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="kush.jpeg"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Kush Patel</h5>
              <div className="icons">
                <a href="https://github.com/pushkatel">
                  <FaGithub color="black" size={25} />
                </a>
                <a href="https://www.linkedin.com/in/kushpatel21/">
                  <FaLinkedin color="blue" size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="chuck.jpeg"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Chuck Lucas</h5>
              <div className="icons">
                <a href="https://github.com/Clucas0311">
                  <FaGithub color="black" size={25} />
                </a>
                <a href="https://www.linkedin.com/in/charleslucas1/">
                  <FaLinkedin color="blue" size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="benny.jpeg"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Benny Khoker</h5>
              <div className="icons">
                <a href="https://github.com/bkhoker88">
                  <FaGithub color="black" size={25} />
                </a>
                <a href="https://www.linkedin.com/in/benny-khoker/">
                  <FaLinkedin color="blue" size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnMore
