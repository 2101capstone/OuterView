import React from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'
var synthesis = window.speechSynthesis
var voices = []
var langRegex = /^en(-[a-z]{2})?$/i
voices = synthesis.getVoices().filter(voice => langRegex.test(voice.lang))

const questions = [
  'Hello, Tell me about yourself',
  'What Makes you a good addition to our company',
  'What experiences and skills make you a great candidate for this position.',
  'What has been your most meaningful work experience .',
  'What qualities make you a team player.',
  'What do you look for in an employer.'
]

const SpeechSynthesis = () => {
  const populateVoices = () => {
    const defaultVoice = voices[11]
    console.log('All Voices --->', voices)
    console.log('Default Voice --->', defaultVoice)
  }

  const randomQuestionGenerator = () => {
    let randomQuesion = questions[Math.floor(Math.random() * questions.length)]
    var utterance = new SpeechSynthesisUtterance(randomQuesion)
    synthesis.speak(utterance)
    var amISpeaking = synthesis.speaking
    console.log('Am i speaking?-->', amISpeaking)
  }

  return (
    <button type="button" onClick={randomQuestionGenerator}>
      Random Interview Question
    </button>
  )
}

export default SpeechSynthesis
