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
  'What do you look for in an employer.',
  'What are your greatest strengths?',
  'What are your weaknesses?',
  'Tell me about an achievement you’re really proud of.',
  'Where do you see yourself in five years?',
  'Tell Me About a Challenge or Conflict You’ve Faced at Work, and How You Dealt With It.',
  'Tell Me About a Time You Demonstrated Leadership Skills.',
  'What Are You Looking for in a New Position?',
  'What Type of Work Environment Do You Prefer?',
  'How Would Your Boss and Coworkers Describe You?',
  'What are 5 traits to Describe Yourself?',
  'How Do You Deal With Pressure or Stressful Situations?',
  'What Are Your Salary Expectations?'
]

const SpeechSynthesis = () => {
  const populateVoices = () => {
    const defaultVoice = voices[11]
  }

  const randomQuestionGenerator = () => {
    let randomQuesion = questions[Math.floor(Math.random() * questions.length)]
    var utterance = new SpeechSynthesisUtterance(randomQuesion)
    synthesis.speak(utterance)
    var amISpeaking = synthesis.speaking
  }

  return (
    <button type="button" onClick={randomQuestionGenerator}>
      Random Interview Question
    </button>
  )
}

export default SpeechSynthesis
