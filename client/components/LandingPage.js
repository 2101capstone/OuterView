import React from 'react'
import WordCloud from './Cloud'

const LandingPage = () => {
  const dummy =
    'one two two three three three four four four four five five five five five six six six six six six seven seven seven seven seven seven seven eight eight eight eight eight eight eight eight nine nine nine nine nine nine nine nine nine ten ten ten ten ten ten ten ten ten ten'

  return (
    <div>
      <h1>Welcome to Outerview</h1>
      <img
        clasName="landing"
        src="https://venturebeat.com/wp-content/uploads/2018/03/shutterstock_731158624-e1576819636533.jpg?w=1200&strip=all"
      />
      <h3> What is Outerview ?</h3>
      <h3> How does it all work?</h3>
      <h5> Facial Data</h5>
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
        Step 3: Converting the image to data The face capture process transforms
        analog information (a face) into a set of digital information (data)
        based on the person's facial features. Your face's analysis is
        essentially turned into a mathematical formula. We can then use this
        data to determine facial expressions associated with emotions.
      </p>
      <h5> Vocie Data</h5>
      <p>
        Step 1: Voice detection The microphone detects sound and audio input as
        you begin speaking and ends on a break of audio input.
      </p>

      <p>
        Step 2: Voice analysis, our software breaks your speech down into bits
        it can interpret, converts it into a digital format, and analyzes the
        pieces of content.
      </p>

      <p>
        Step 3: Converting the sound to data, after speech ends our application
        makes determinations based on programming and speech patterns, making
        hypotheses about what the user is actually saying. After determining
        what the users most likely said, the software transcribes the
        conversation into text.
      </p>
      <h2> Voice Analytics</h2>
      <div className="containerLp">
        <div className="analytics">
          <p> example: {dummy}</p>
          <WordCloud transcript={dummy} />
        </div>
      </div>
    </div>
  )
}

export default LandingPage