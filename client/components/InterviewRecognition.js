import React from 'react'

/**
 * COMPONENT
 */

var instructions = document.getElementById('instructions')
// get action element reference
var textBox = document.getElementById('textbox')
var startButton = document.getElementById('start-btn')
var content = ''

var recognition = new webkitSpeechRecognition()

recognition.continuous = true
export const InterviewRecognition = () => {
  // get output div reference
  // function stopRecogntion() {

  // recognition.onspeechend = function () {
  //     instructions.innerHTML = "stopped listening, hope you are done...";
  //     recognition.stop();
  // }

  function runSpeechRecognition() {
    // This runs when the speech recognition service starts

    recognition.onstart = function() {
      var instructions = document.getElementById('instructions')
      instructions.innerHTML = 'listening, please speak...'

      //     if (content.length) {
      //         content += ''
      //     }
    }

    // recognition.continuous = true;
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
      var textBox = document.getElementById('textbox')
      var results = event.results
      var transcript = event.results[results.length - 1][0].transcript
      // var confidence = event.results[0][0].confidence;
      console.log('THIS IS RESULTS----->', results)
      console.log('THIS IS UR TRANS--->', transcript)
      textBox.value = transcript + '\n'
      // + confidence * 100 + "%"
      // output.classList.remove("hide");
    }

    recognition.onspeechend = function() {
      instructions.innerHTML = 'stopped listening, hope you are done...'
      recognition.stop()
      // recognition.start();
    }

    // start recognition
    recognition.start()

    //     var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    //     var recognition = new SpeechRecognition();

    //     let textBox = document.getElementById('textbox');
    //     let instructions = document.getElementById('instructions')
    //     let startButton = document.getElementById('start-btn')
    //     let content = ''
    // startButton.addEventListener('click', function () {
    //     if (content.length) {
    //         content += ''
    //     }
    // })

    //     recognition.continuous = true;

    //     recognition.onspeechend = function () {
    //         instructions.innerHTML = "stopped listening, hope you are done...";
    //         recognition.stop();
    //     }
    //     // recognition.start();
    //     recognition.onstart = function () {
    //         instructions.innerHTML = 'Voice Rec On!!'
    //     }
    //     recognition.onresult = function (event) {
    //         var current = event.resultIndex
    //         var transcript = event.results[current][0].transcript
    //         content += transcript

    //         textBox.innerHTML = content

    //         console.log('Button was clicked!!')
    //     }
  }

  return (
    <div>
      <h2>Speech To Text</h2>
      <div>
        <textarea id="textbox" />
      </div>

      <button id="start-btn" type="button" onClick={runSpeechRecognition}>
        {' '}
        START
      </button>
      <button type="button" onClick={recognition.stop()}>
        STOP{' '}
      </button>
      <p id="instructions">Press the button to record what you are saying!!!</p>
    </div>
  )
}
