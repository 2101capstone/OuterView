/* eslint-disable no-use-before-define */
import React, {useState, useEffect} from 'react'
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = true
recognition.interimResults = true
recognition.lang = 'en-US'

//filler word OBJ
const fillerWords = {
  like: 0,
  Like: 0,
  Totally: 0,
  totally: 0,
  Basically: 0,
  basically: 0,
  Literally: 0,
  literally: 0,
  Very: 0,
  very: 0,
  Really: 0,
  really: 0,
  So: 0,
  so: 0,
  Um: 0,
  um: 0,
  Cuz: 0,
  cuz: 0,
  Well: 0,
  well: 0,
  seriously: 0,
  Seriously: 0,
  Probably: 0,
  probably: 0,
  Stuff: 0,
  stuff: 0,
  Whatever: 0,
  whatever: 0,
  But: 0,
  but: 0,
  Sorta: 0,
  sorta: 0
}

const SpeechToText = () => {
  //represent the recording state either true or false
  const [isRecording, setIsRecording] = useState(false)
  //represents the words state that are actually being said
  const [words, setWords] = useState([])
  //represents the final Transcript as a string made up of the words
  const [transcript, setTranscript] = useState('')

  const [fillerWordTotalCount, setFillerWordTotalCount] = useState(0)

  //similar to didMount
  useEffect(() => {
    handleListen()
  }, [isRecording])
  // useEffect(() => {
  //   if (transcript.length > 0) {
  //     //work around!!
  //     //then put firestore logic
  //     //and we will only run this effect when transcript state changes when we save.
  //   }
  // }, [transcript])

  //handles whether the mic is listening or not
  const handleListen = () => {
    if (isRecording) {
      recognition.start()
    }
  }
  //event listener that fires off after record starts
  recognition.onstart = () => {
    console.log('recognition is on!!!')
  }

  //when we recieve our results back we will set our Words state with the result.transcript
  recognition.onresult = event => {
    setWords(
      Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
    )
  }
  //will save the transcipt
  const handleSaveTranscript = () => {
    let count = 0
    const finalWords = words.join().split(' ')
    //count the filler words
    finalWords.forEach(word => {
      if (!isNaN(fillerWords[word])) {
        fillerWords[word] = fillerWords[word] + 1
        count = count + 1
      }
    })
    // eslint-disable-next-line complexity
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

    //setting the filler word count
    setFillerWordTotalCount(count)

    console.log('fillerWords-----> ', fillerWords)
    console.log('Words---->', words)
    console.log('Transcript--->', transcript)
    console.log('FILLER WORD COUNT-----> ', count)
    console.log('FILLER WORD GRADE-----> ', finalGrade)
  }

  recognition.onend = () => {
    console.log('recognition is off!!!')
    handleSaveTranscript()
  }

  const end = () => {
    const finalWords = words.join().split(' ')
    recognition.stop()
    setIsRecording(false)
    setTranscript(finalWords.join(' '))
    console.log('RECORD HAS ENDED!!!')
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
            // onClick={() => setIsRecording(prevState => !prevState)}
            onClick={() => setIsRecording(true)}
          >
            Start
          </button>
          <button type="button" onClick={end}>
            End
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
