import React from 'react'

export default function scoring(transcript, fillerWords, facialData) {
  let score = {
    finalScore: 0,
    message: '',
    transcriptScore: 0,
    emotionalScore: 0,
    topThree: [],
    dataPoints: []
  }
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

  /// combine all facial data update emotions object add to dataPoints
  for (let i = 0; i < facialData.length; i++) {
    for (let key in emotions) {
      if (facialData[i][key]) {
        emotions[key] += Math.round(facialData[i][key] * 100000) / 100000
        emotions.total += facialData[i][key]
      }
    }

    // score.dataPoints.push(emotions)
  }

  //sift through facial data get score
  const getEmotionalScore = emotionsobj => {
    let emotionalScore = 0

    //add data together get percentage as whole number out of 100
    for (let key in emotionsobj) {
      if (key !== 'total') {
        emotionsobj[key] = emotionsobj[key] / emotionsobj.total
        emotionsobj[key] = Math.round((emotionsobj[key] *= 100))
      }
    }
    // sort data in order of most to least
    emotionsobj.total = emotionsobj.total * 100
    const sorted = Object.entries(emotionsobj).sort((a, b) => b[1] - a[1])
    // add to scoring object in order
    score.topThree.push(
      sorted[1][0],
      sorted[2][0],
      sorted[3][0],
      sorted[4][0],
      sorted[5][0],
      sorted[6][0],
      sorted[7][0]
    )

    // calculate score based on percentage of total
    for (let key in emotionsobj) {
      if (key) {
        let positive = ['neutral', 'happy', 'surprised']
        let negative = ['angry', 'sad', 'disgusted', 'fearful']
        if (positive.includes(key)) emotionalScore += emotionsobj[key]
        if (negative.includes(key)) emotionalScore -= emotionsobj[key]
      }
    }

    // add emotionalscore to score object
    score.emotionalScore = emotionalScore
    return emotionalScore
  }

  // sift through transcript and fillerwords get a score
  const getTranscriptScore = (transcriptArr, fillersObj) => {
    let transcriptScore = 0
    transcriptArr = transcriptArr.join(' ').split(' ')
    let wordCount = transcriptArr.length
    let fillerCount = fillersObj.TOTAL || 0
    let percentFiller = fillerCount / wordCount
    if (transcriptArr.length) {
      if (percentFiller <= 0.25) transcriptScore += 12
      if (percentFiller <= 0.15) transcriptScore += 15
      if (percentFiller <= 0.1) transcriptScore += 23
      if (percentFiller <= 0.05) transcriptScore += 25
      if (percentFiller <= 0.01) transcriptScore += 25
    }
    score.transcriptScore = transcriptScore
    return transcriptScore
  }

  /// get final score add to score object
  //refactor to have less weight on emotional score
  score.finalScore =
    (getEmotionalScore(emotions) +
      getTranscriptScore(transcript, fillerWords) * 3) /
    4

  /// get message add to score object
  let messageScore = score.finalScore
  const message = fScore => {
    if (fScore >= 90)
      return 'Congratulations you have proven your ready for that interview '
    if (fScore < 90 && fScore >= 80) return 'You did really well'
    if (fScore < 80 && fScore >= 70)
      return 'You did good but consider brushing up on your habits'
    if (fScore < 70 && fScore >= 50)
      return 'You did ok but you should definatly work on improving '
    else
      return 'You did not do so well practice doing more recordings to help improve your scores'
  }
  score.message = message(messageScore)

  // return final score object
  return score
}
