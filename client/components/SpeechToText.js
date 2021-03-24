/* eslint-disable complexity */
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
  const {startCapture, stopCapture, setCapturing, isCapturing} = props
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
    const calculateScore = () => {
      if (count === 0) {
        return 'A+'
      }
      if (count > 0 && count <= 2) {
        return 'A'
      }
      if (count > 2 && count <= 4) {
        return 'A-'
      }
      if (count > 4 && count <= 6) {
        return 'B+'
      }
      if (count > 6 && count <= 8) {
        return 'B'
      }
      if (count > 8 && count <= 10) {
        return 'B-'
      }
      if (count > 10 && count <= 12) {
        return 'C+'
      }
      if (count > 12 && count <= 14) {
        return 'C'
      }
      if (count > 14 && count <= 16) {
        return 'C-'
      }
      if (count > 16 && count <= 18) {
        return 'D'
      } else return 'F'
    }

    let finalGrade = calculateScore(count)
    //setting the final transcript with the words
    setTranscript(Array.from(words).join(''))
    //setting the filler word count
    setFillerWordTotalCount(count)
    console.log('fillerWords-----> ', fillerWords)
    console.log('basically Count-----> ', fillerWords.basically)
    console.log('FILLER WORD COUNT-----> ', count)
    console.log('FILLER WORD COUNT-----> ', count)
    console.log('FILLER WORD GRADE-----> ', finalGrade)
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
        // setCapturing(false)
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
