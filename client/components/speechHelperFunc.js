export const fillerWords = {
  TOTAL: 0,
  like: 0,
  totally: 0,
  basically: 0,
  literally: 0,
  very: 0,
  really: 0,
  so: 0,
  um: 0,
  cuz: 0,
  well: 0,
  seriously: 0,
  probably: 0,
  stuff: 0,
  whatever: 0,
  but: 0,
  butt: 0,
  sorta: 0,
  ahh: 0,
  hmmm: 0,
  absolutely: 0,
  wow: 0
}
var voices = []

const questions = [
  'Hello, Tell me about yourself',
  'What Makes you a good addition to our company',
  'What experiences and skills make you a great candidate for this position.',
  'What has been your most meaningful work experience .',
  'What qualities make you a team player.',
  'What do you look for in an employer.'
]

export const countFiller = transcript => {
  transcript = transcript.toLowerCase().split(' ')
  transcript.forEach(word => {
    if (!isNaN(fillerWords[word])) {
      fillerWords[word] = fillerWords[word] + 1
      fillerWords.TOTAL = fillerWords.TOTAL + 1
    }
  })
}

export const randomQuestionGenerator = () => {
  var synthesis = window.speechSynthesis
  var langRegex = /^en(-[a-z]{2})?$/i
  voices = synthesis.getVoices().filter(voice => langRegex.test(voice.lang))
  let randomQuesion = questions[Math.floor(Math.random() * questions.length)]
  var utterance = new SpeechSynthesisUtterance(randomQuesion)
  synthesis.speak(utterance)
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
export const recognition = new SpeechRecognition()
