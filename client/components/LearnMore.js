import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const LearnMore = () => {
  return (
    <div className="learnMore-border">
      <div className="jumbotron">
        <h1 className="display-4">OuterView</h1>
        <p className="lead">
          OuterView utilizes facial and speech recognition to quantify and
          visualize your observable mannerisms. With just your webcam, our
          application can help identify commonly used filler words in
          conjunction with detectable facial emotions to create a cohesive
          score. Our goal is to help you get an OuterView before your next
          interview.
        </p>
      </div>
      <div className="recognitions-div">
        <section id="section-c">
          <div className="box-1">
            <h1 className="recognition-h1">Speech Recognition</h1>
            <br></br>
            <ul className="recognition-bullets">
              <li>
                Step 1: Audio detection - Web Speech API listens and transcribes
                your interview or practice speech into text
              </li>{' '}
              <br></br>
              <li>
                Step 2: Audio analysis - Our software breaks your speech down
                into bits it can interpret, converts it into a digital format,
                and analyzes each piece of content
              </li>{' '}
              <br></br>
              <li>
                Step 3: Converting the audio to data - Based on the words
                spoken, our unique algorithm counts and tracks filelr words used
                during speech. Future functionality is planned to use Google
                Cloud AI for a through sentiment analysis. Results are displayed
                with a word cloud and text highlighting
              </li>
            </ul>
          </div>
          <div className="box-2">
            <h1 className="recognition-h1">Facial Recognition</h1>
            <br></br>
            <ul className="recognition-bullets">
              <li>
                Step 1: Face detection - Powerful facial recongition algorithms
                find and mark the face when you start recording
              </li>
              <br></br>
              <li>
                Step 2: Face analysis - An image of the face is captured and
                analyzed. Face-API.js uses a 68 point face landmark map to
                determine facial emotions using models have been trained on a
                dataset of ~35k face images
              </li>
              <br></br>
              <li>
                Step 3: Emotion Analysis - Analog facial impormation is
                converted to digital emotion and rankings. Your face's analysis
                is essentially turned into a mathematical formula. We can then
                use this data to determine facial expressions associated with
                emotions
              </li>
            </ul>
          </div>
        </section>
      </div>
      <hr />
      <div className="tech-div">
        <h1 id="h1-developers">Technologies</h1>
        <div className="card-group">
          <div className="card">
            <img
              className="techIMG"
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Freact-js-header.png?alt=media&token=7888bc7d-6475-4cd9-bbd4-9e250cc33ddd"
            />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <ul className="card-bullets">
                <li>Builds user interfaces and interactive UI components</li>
                <li>Rich and dynamic single page and mobile applications</li>
                <li>
                  React Hooks allowed state and lifecycle functions without
                  writing entire classes
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img
              className="techIMG"
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Ffirebase.png?alt=media&token=2530a86b-85de-48aa-809f-29b7954d85c2"
            />
            <div className="card-body">
              <h5 className="card-title">Google Firebase</h5>
              <ul className="card-bullets">
                <li> Flexible, scalable NoSQL cloud database</li>
                <li>
                  Stores and syncs data for client and server-side development
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img
              className="techIMG"
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fface-api.png?alt=media&token=f6921285-b6b1-4e82-a20b-681ebacba404"
            />
            <div className="card-body">
              <h5 className="card-title">Face-API.js</h5>
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
            <img
              className="techIMG"
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fwebspeech.png?alt=media&token=a62db28c-a4ea-4756-b8c5-77815fcfdcf6"
            />
            <div className="card-body">
              <h5 className="card-title">Web Speech API</h5>
              <ul className="card-bullets">
                <li>Enables voice data to be incorporated into web apps</li>
                <li>
                  Both SpeechSynthesis (Text-to-Speech) & Speech Recognition
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img
              className="techIMG"
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fbootstrap.gif?alt=media&token=3d117af5-4497-4604-9b4f-3d4ec43ae14d"
            />
            <div className="card-body">
              <h5 className="card-title">Bootstrap UI</h5>
              <ul className="card-bullets">
                <li>Responsive, mobile-first front-end CSS framework</li>
                <li>Design library from Twitter</li>
                <li>
                  Templates include typography, forms, buttons, navigation, and
                  other interface components
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
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fkush.jpeg?alt=media&token=8a886687-3eea-45f3-b1fe-f8f019ed7176"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Kush Patel</h5>
              <ul className="card-bullets"> </ul>
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
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fchuck.jpeg?alt=media&token=f534701d-4307-46d9-ac8e-d770e5224776"
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
              src="https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fbenny.jpeg?alt=media&token=13d9753b-480b-4ba5-8f15-da0d46aedaf8"
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
        <a href="https://github.com/2101capstone/OuterView#readme">
        <h4 id="h1-developers">OuterView Github</h4>
      </a>
    </div>
  )
}

export default LearnMore
