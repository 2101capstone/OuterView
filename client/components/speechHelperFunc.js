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

export const countFiller = transcript => {
  transcript = transcript.toLowerCase().split(' ')
  transcript.forEach(word => {
    if (!isNaN(fillerWords[word])) {
      fillerWords[word] = fillerWords[word] + 1
      fillerWords.TOTAL = fillerWords.TOTAL + 1
    }
  })
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
export const recognition = new SpeechRecognition()
