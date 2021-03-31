import React from 'react'
import {Carousel, Card} from 'react-bootstrap'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const LearnMore = () => {
  return (
    <div className="about-me-div">
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
            src="mike.jpeg"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Mike Busto</h5>
            <div className="icons">
              <a className="icon" href="https://github.com/MBusto4">
                <FaGithub color="black" size={80} />
              </a>
              <a href="https://www.linkedin.com/in/michael-busto/">
                <FaLinkedin color="blue" size={80} />
              </a>
            </div>
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
            <div className="icons">
              <a href="https://github.com/pushkatel">
                <FaGithub color="black" size={80} />
              </a>
              <a href="https://www.linkedin.com/in/kushpatel21/">
                <FaLinkedin color="blue" size={80} />
              </a>
            </div>
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
            <div className="icons">
              <a href="https://github.com/Clucas0311">
                <FaGithub color="black" size={80} />
              </a>
              <a href="https://www.linkedin.com/in/charleslucas1/">
                <FaLinkedin color="blue" size={80} />
              </a>
            </div>
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
            <div className="icons">
              <a href="https://github.com/bkhoker88">
                <FaGithub color="black" size={80} />
              </a>
              <a href="https://www.linkedin.com/in/benny-khoker/">
                <FaLinkedin color="blue" size={80} />
              </a>
            </div>
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
      <h1 id="tech-used-h1">Technologies Used</h1>
      <Carousel fade={true} controls={true}>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="mike.jpeg"
            alt="First slide"
          /> */}
          <Card style={{width: '70rem'}}>
            <Card.Img variant="top" src="react-js-header.png" />
            <Card.Body>
              <Card.Title>React.js</Card.Title>
              <Card.Text>
                Is an open-source, front end, JavaScript library for building
                user interfaces or UI components. React code is made of entities
                called components. Components can be rendered to a particular
                element in the DOM using the React DOM library
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{width: '70rem'}}>
            <Card.Img variant="top" src="firebase.png" />
            <Card.Body>
              <Card.Title>Firebase</Card.Title>
              <Card.Text>
                <ul>
                  <li> Real Time No SQL database</li>
                  <li> File Storage</li>
                  <li> Authentication</li>
                  <li> Hosting</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{width: '70rem'}}>
            <Card.Img variant="top" src="face-api.png" />
            <Card.Body>
              <Card.Title>face-api.js</Card.Title>
              <Card.Text>
                JavaScript API for face detection and face recognition in the
                browser implemented on top of the tensorflow.js core API
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{width: '70rem'}}>
            <Card.Img variant="top" src="webspeech.png" />
            <Card.Body>
              <Card.Title>Web Speech API</Card.Title>
              <Card.Text>
                The Web Speech API enables you to incorporate voice data into
                web apps. API is made up of two parts: SpeechSynthesis
                (Text-to-Speech), and SpeechRecognition (Asynchronous Speech
                Recognition.), The Web Speech API makes web apps able to handle
                voice data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default LearnMore
