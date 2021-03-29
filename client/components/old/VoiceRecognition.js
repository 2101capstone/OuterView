import React, {Component} from 'react'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

var finalTranscript = ''
var recognizing = false
var ignoreOnend
// let finalResults = document.getElementById('finalSpan')
// let interimResults = document.getElementById('interimSpan')
let recordButton = document.getElementById('sButton')

const VoiceRecognition = () => {
  const recognition = new SpeechRecognition()
  console.log('This is ur rec obj---->', recognition)
  if (!('webkitSpeechRecognition' in window)) {
    console.log('NOT WORKING!')
  } else {
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onstart = function() {
      console.log('RECORDING!!!')
      recognizing = true
    }

    recognition.onend = function() {
      console.log('NO MIC DETECTED')
      recognizing = false
    }

    recognition.onresult = function(event) {
      var interimTranscript = ''
      let finalResults = document.getElementById('finalSpan')
      let interimResults = document.getElementById('interimSpan')
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript
        } else {
          interimTranscript += event.results[i][0].transcript
        }
      }
      finalResults.innerHTML = finalTranscript
      interimResults.innerHTML = interimTranscript
      console.log('INTERIM RESULTS---->', interimTranscript)
      console.log('FINAL TRANSCRIPT--->', finalTranscript)
    }
  }
  function startButton() {
    console.log('STARTED RECOGNITION')
    let finalResults = document.getElementById('finalSpan')
    let interimResults = document.getElementById('interimSpan')
    finalTranscript = ''
    recognition.start()
    ignoreOnend = false
    finalResults.innerHTML = ''
    interimResults.innerHTML = ''
  }

  function stopButton() {
    console.log('STOPPED RECOGNITION')
    if (recognizing) {
      recognizing = false
      recognition.stop()
    }
  }

  return (
    <div>
      <div id="div_start">
        <button type="button" id="sButton" onClick={startButton}>
          START
        </button>
      </div>
      <button type="button" id="stButton" onClick={stopButton}>
        STOP
      </button>
      <div id="results">
        <span className="final" id="finalSpan"></span>
        <span className="interim" id="interimSpan"></span>
      </div>
    </div>
  )
}

export default VoiceRecognition
