import React from 'react'

const Scoring = props => {
  let {transcript, facialData, fillerWords} = props
  transcript.join(' ')
  let score = 0
  let emotion1
  let emotion2
  let emotion3
  let emotion4
  let emotion5
  let emotion6
  let emotions = {
    angry: 0,
    happy: 0,
    surprised: 0,
    sad: 0,
    disgusted: 0,
    fearful: 0,
    neutral: 0,
    total: 0
  }
  /// combine all facil data
  for (let i = 0; i < facialData.length; i++) {
    for (let key in emotions) {
      if (facialData[i][key]) {
        emotions[key] += Math.round(facialData[i][key] * 100000) / 100000
        emotions.total += facialData[i][key]
      }
    }
  }

  //sift thru facial data get score
  const emotionalScore = emotionsobj => {
    for (let key in emotionsobj) {
      if (key !== 'total') {
        emotionsobj[key] = emotionsobj[key] / emotionsobj.total
        emotionsobj[key] = Math.round((emotionsobj[key] *= 100))
      }
    }

    emotionsobj.total = emotionsobj.total * 100
    const sorted = Object.entries(emotionsobj).sort((a, b) => b[1] - a[1])
    emotion1 = sorted[1]
    emotion2 = sorted[2]
    emotion3 = sorted[3]
    emotion4 = sorted[4]
    emotion5 = sorted[5]
    emotion6 = sorted[6]
  }
  emotionalScore(emotions)
  //  const wordsScore = (transcriptStr, fillerWordObj) =>{
  //  }

  //   let score = emotionalScore(emotions) + wordsScore(transcript, fillerWords)

  const message = score => {
    if (score >= 93)
      return 'Congratulations you have proven your ready for that interview '
    if (score < 93 && score >= 85) return 'You did really well'
    if (score < 85 && score >= 75)
      return 'You did good but consider brushing up on your habits'
    if (score < 75 && score >= 50)
      return 'You did ok but you should definatly work on improving '
    else
      return ' You did not do so well check out or tips and tricks section to help improve your scores'
  }

  // test

  return (
    <div>
      <div> {`Emotions observed in order `}</div>
      <div> {`${emotion1[0]} ----> ${emotion1[1]}%`}</div>
      <div> {`${emotion2[0]} ----> ${emotion2[1]}%`}</div>
      <div> {`${emotion3[0]} ----> ${emotion3[1]}%`}</div>
      <div> {`${emotion4[0]} ----> ${emotion4[1]}%`}</div>
      <div> {`${emotion5[0]} ----> ${emotion5[1]}%`}</div>
      <div> {`${emotion6[0]} ----> ${emotion6[1]}%`}</div>
      <h4>{`You Scored ${score}%  ${message(score)}`}</h4>
    </div>
  )
}

export default Scoring

/// how will we recieve data?
// filler words count ?
// confidence avg ?
// eye detection focus?

//_____________________________________________
// example of how data will be recieved
// from facial recognition
// recieve ------>
// angry: 0.001262365491129458
// disgusted: 0.00004214933869661763
// fearful: 0.000019101729776593857
// happy: 0.00018955656560137868
// neutral: 0.9887621998786926
// sad: 0.009328041225671768
// surprised: 0.00039660962647758424}

//total words said % scale
//  emotions and voice

// score will be frpm 0% to 100%
//_____________________________________________
// 0 shud be high amount of filler words > 25

//_____________________________________________
// 100

//_____________________________________________
//Message should correspond to score
// Algo for capturing Emotions

//    const seriesConstruct = () => {
//      const emotionavg = obj => {
//        let words = {}
//        str.split(' ').forEach(word => {
//          if (words[word]) {
//            words[word]++
//          } else {
//            words[word] = 1
//          }
//        })
//        return words
//      }

//      const countedWords = wordCount(transcript)

//      let wordsArr = []

//      Object.keys(countedWords).forEach(word => {
//        let obj = {}
//        obj.label = word
//        obj.y = countedWords[word]
//        wordsArr.push(obj)
//      })

//      return wordsArr
//    }

//    var series = [{data: seriesConstruct()}]
//  }
