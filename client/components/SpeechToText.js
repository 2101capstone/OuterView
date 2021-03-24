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
  like: 0,
  Like: 0,
  Totally: 0,
  totally: 0,
  Basically: 0,
  basically: 0,
  Literally: 0,
  literally: 0
}

const SpeechToText = props => {
  const {startCapture, stopCapture, isCapturing} = props
  // console.log('Capturing--->', isCapturing)
  const [isRecording, setIsRecording] = useState(false)
  const [words, setWords] = useState([])
  const [transcript, setTranscript] = useState('')
  const [fillerWordTotalCount, setFillerWordTotalCount] = useState(0)

  //similar to didMount
  useEffect(() => {
    handleListen()
  }, [isRecording])

  const handleSaveTranscript = () => {
    let count = 0

    //count each filler word
    words
      .join()
      .split(' ')
      .forEach(word => {
        if (!isNaN(fillerWords[word])) {
          fillerWords[word] = fillerWords[word] + 1
          count = count + 1
        }
      })
    //setting the final transcript with the words
    setTranscript(Array.from(words).join(''))
    //setting the filler word count
    setFillerWordTotalCount(count)
    console.log('fillerWords-----> ', fillerWords)
    console.log('basically Count-----> ', fillerWords.basically)
    console.log('FILLER WORD COUNT-----> ', count)
  }
  //handles weather the mic is listening or not
  const handleListen = () => {
    if (isRecording === true) {
      recognition.start()
      startCapture()
      recognition.onend = () => {
        console.log('continue..')
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        stopCapture()
        handleSaveTranscript()
        console.log('Stopped recognition on Click')
      }
    }

    recognition.onstart = () => {
      console.log('recognition is on!!!')
    }

    //when we recieve or results back we will set our Words state wit the transcipt
    recognition.onresult = event => {
      setWords(
        Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
      )
    }
  }

  return (
    <>
      <h1 className="h1-transcripts">Transcripts</h1>
      <div className="container">
        <div className="transcripts-div">
          <h2>Current Transcript</h2>
          {isRecording ? <span>Speaking...</span> : <span>Not Recording</span>}
          <button
            type="button"
            onClick={() => setIsRecording(prevState => !prevState)}
          >
            Start/Stop
          </button>
          <div>
            {words.map(word => (
              <p key={word}>{word}</p>
            ))}
          </div>
        </div>
        <div className="transcripts-div">
          <h2>Transcripts</h2>
          {transcript}
        </div>
      </div>
    </>
  )
}
export default SpeechToText
