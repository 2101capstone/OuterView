import React from 'react'

const Scoring = props => {
  let score
  let emotions = {
    angry: 0,
    happy: 0,
    surprised: 0,
    sad: 0,
    disgusted: 0,
    fearful: 0,
    neutral: 0
  }

  let {transcript, facialData} = props

  for (let i = 0; i < facialData.length; i++) {
    for (let key in emotions) {
      if (facialData[i][key]) emotions[key] += facialData[i][key]
    }

    console.log(`angry: ${angry * 100},
    disgusted: ${disgusted * 100},
    fearful: ${fearful * 100},
    happy: ${happy * 100},
    neutral: ${neutral * 100},
    sad: ${sad * 100},
    surprised: ${surprised * 100}`)
  }

  const message = score => {
    if (score >= 93)
      return 'Congratulations you have proven your ready for that interview '
    if (score < 93 && score >= 85) return 'You did really well'
    if (score < 85 && score >= 75)
      return 'You did good but consider brushing up on your habits'
    if (score < 75 && score >= 50)
      return 'You did ok but you should definatly work on improving '
    else
      return ' You didnt do so well check out or tips and tricks section to help improve your scores'
  }

  // test

  return <div>{`You Scored ${score}%  ${message(score)}`}</div>
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

//  getFaceData() {
//     const expressions = {}

//     const angry = expressions.angry / expressions.called

//     const happy = expressions.happy / expressions.called

//     const surprised = expressions.surprised / expressions.called

//     const sad = expressions.sad / expressions.called

//     const disgusted = expressions.disgusted / expressions.called

//     const fearful = expressions.fearful / expressions.called

//     const neutral = expressions.neutral / expressions.called

//     console.log(`angry: ${angry * 100},
//     disgusted: ${disgusted * 100},
//     fearful: ${fearful * 100},
//     happy: ${happy * 100},
//     neutral: ${neutral * 100},
//     sad: ${sad * 100},
//     surprised: ${surprised * 100}`)

//   }

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
