/* eslint-disable no-use-before-define */
import React, {useState, useEffect} from 'react'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
// console.log('THIS IS UR REC OBJ--->', recognition)

recognition.continuous = true
recognition.interimResults = true
recognition.lang = 'en-US'

//filler word map
const fillerWords = {
  like: true,
  Like: true,
  Totally: true,
  totally: true,
  Basically: true,
  basically: true,
  Literally: true,
  literally: true
}

const SpeechToText = props => {
  const {startCapture, stopCapture, isCapturing} = props
  console.log('Capturing--->', isCapturing)
  const [isRecording, setIsRecording] = useState(false)
  const [Transcript, setTranscript] = useState(null)
  const [savedTranscripts, setSavedTranscripts] = useState([])

  //similar to didMount
  useEffect(() => {
    handleListen()
  }, [isRecording])

  // const findWord = (word, str) => {
  //   return str.split(' ').some(function (w) { return w === word })
  // }

  const handleSaveTranscript = () => {
    setSavedTranscripts([...savedTranscripts, Transcript])
    setTranscript('')
  }
  const handleListen = () => {
    if (isRecording === true) {
      recognition.start()
      startCapture()
      recognition.onend = () => {
        console.log('continue..')
        recognition.start()
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        stopCapture()
        // isCapturing(false)
        handleSaveTranscript()
        console.log('Stopped recognition on Click')
      }
    }
    recognition.onstart = () => {
      console.log('recognitions on')
    }

    recognition.onresult = event => {
      // console.log(event.results) shows the results
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      const confidence = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.confidence)
        .join('')
      // console.log('Transcript-->', transcript, '\n', confidence)
      setTranscript(transcript)

      //logic to track words while speeking
      let fillerWordCount = 0
      let fillerWordsUsed = []
      let finalTranscript = transcript
      let transcriptArray = finalTranscript.split(' ')

      transcriptArray.forEach(fillerWord => {
        if (fillerWords[fillerWord]) {
          fillerWordCount++
          fillerWordsUsed.push(fillerWord)
        }
      })
      console.log('FILLER WORD COUNT-----> ', fillerWordCount)
      console.log('FILLER WORDS USED-----> ', fillerWordsUsed)
    }
  }

  return (
    <>
      <h1 className="h1-transcripts">Transcripts</h1>
      <div className="container">
        <div className="transcripts-div">
          <h2>Current Transcript</h2>
          {isRecording ? <span>Speaking...</span> : <span>Not Recording</span>}
          {/* <button
            type="button"
            onClick={handleSaveTranscript}
            disabled={!Transcript}
          >
            Save Transcript
          </button> */}
          <button
            type="button"
            onClick={() => setIsRecording(prevState => !prevState)}
          >
            Start/Stop
          </button>
          <p>{Transcript}</p>
        </div>
        <div className="transcripts-div">
          <h2>Transcripts</h2>
          {savedTranscripts.map(transcript => (
            <p key={transcript}>{transcript}</p>
          ))}
        </div>
      </div>
    </>
  )
}
export default SpeechToText
