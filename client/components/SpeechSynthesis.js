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

  const speak = () => {
    // const defaultVoice = voices[12]
    // var utterance1 = new SpeechSynthesisUtterance('Hello, Tell me about yourself');
    // var utterance2 = new SpeechSynthesisUtterance('What Makes you a good addition to our company');
    var utterance = new SpeechSynthesisUtterance(questions[0])
    synthesis.speak(utterance)
    // synthesis.speak(utterance2);

    var amISpeaking = synthesis.speaking
    // utterance1.volume = 5;
    // utterance1.pitch = 0.5;
    // utterance1.voice = defaultVoice
    // utterThis.rate = 0.5;

    // console.log('Voice command to be said--->', utterance1)
    console.log('Am i speaking?-->', amISpeaking)
  }

  const randomQuestionGenerator = () => {
    let randomQuesion = questions[Math.floor(Math.random() * questions.length)]
    var utterance = new SpeechSynthesisUtterance(randomQuesion)
    synthesis.speak(utterance)
    var amISpeaking = synthesis.speaking
    console.log('Am i speaking?-->', amISpeaking)
  }

  return (
    <div className="text-to-speech-div">
      <button type="button" onClick={populateVoices}>
        getVoices
      </button>
      <button type="button" onClick={speak}>
        Speak Text
      </button>
      <button type="button" onClick={randomQuestionGenerator}>
        Random Question
      </button>
    </div>
  )
}

export default SpeechSynthesis
