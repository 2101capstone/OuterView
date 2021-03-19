import React from 'react'

/**
 * COMPONENT
 */
// get action element reference
var startButton = document.getElementById('start-btn')

// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// const recognition = new SpeechRecognition();
// recognition.continuous = true// tracks every word that is said

// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

// var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// var recognition = new SpeechRecognition();

// var recognition = new webkitSpeechRecognition();
let recognition = new webkitSpeechRecognition()

var content = ''
var recognizing = false

export const InterviewRecognition = () => {
  //end the recognition process
  function endSpeech() {
    console.log('SPEECH ENDED!!!!')
    if (recognizing) recognizing = false
    recognition.stop()
  }

  // This runs when the speech recognition service starts
  recognition.onstart = () => {
    recognition.continuous = true
    recognizing = true
    var instructions = document.getElementById('instructions')
    instructions.innerHTML = 'listening, please speak...'
    console.log('WE ARE STARTED!!!!!')
    console.log('THIS IS UR REC--->', recognition)

    if (content.length) {
      content += ''
    }
  }
  recognition.onresult = event => {
    var textBox = document.getElementById('textbox')
    var results = event.results
    var current = event.resultIndex
    var transcript = event.results[current][0].transcript
    var confidence = event.results[0][0].confidence
    console.log('THIS IS RESULTS----->', results)
    console.log('THIS IS UR TRANS--->', transcript)
    textBox.value = transcript + '\n' + (confidence * 100 + '%')
    // output.classList.remove("hide");
    if (transcript === 'hello how are you') {
      console.log('correct term match')
    }
  }

  recognition.onspeechend = () => {
    var instructions = document.getElementById('instructions')
    console.log('WE ENDED!!!!')
    instructions.innerHTML = 'STOP RECORDING!!!'
    recognizing = false
    console.log('THIS IS UR REC--->', recognition)
    recognition.stop()
  }

  function startSpeech() {
    recognition.start()
  }

  return (
    <div>
      <h2>Speech To Text</h2>
      <div>
        <textarea id="textbox" />
      </div>

      <button id="start-btn" type="button" onClick={startSpeech}>
        START
      </button>
      <button type="button" onClick={endSpeech}>
        STOP
      </button>
      <p id="instructions">Press the button to record what you are saying!!!</p>
    </div>
  )
}
