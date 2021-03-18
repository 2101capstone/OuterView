import React from 'react'

/**
 * COMPONENT
 */
export const InterviewRecognition = () => {
  function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById('output')
    // get action element reference
    var action = document.getElementById('action')
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var recognition = new SpeechRecognition()
    // recognition.continuous = false;
    // var myContinuous = recognition.continuous;
    // recognition.continuous = true;

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
      action.innerHTML = '<small>listening, please speak...</small>'
    }

    recognition.onspeechend = function() {
      action.innerHTML =
        '<small>stopped listening, hope you are done...</small>'
      recognition.stop()
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
      var results = event.results
      var transcript = event.results[0][0].transcript
      var confidence = event.results[0][0].confidence
      console.log('THIS IS RESULTS----->', results)
      console.log('THIS IS UR TRANS--->', transcript)
      output.innerHTML =
        '<b>Text:</b> ' +
        transcript +
        '<br/> <b>Confidence:</b> ' +
        confidence * 100 +
        '%'
      output.classList.remove('hide')
    }
    // start recognition
    recognition.start()
  }

  return (
    <div>
      <h2>JavaScript Speech to Text</h2>
      <p>Click on the below button and speak something...</p>
      <button type="button" onClick={() => runSpeechRecognition()}>
        Speech to Text
      </button>{' '}
      &nbsp; <span id="action" />
      <div id="output" className="hide" />
    </div>
  )
}
