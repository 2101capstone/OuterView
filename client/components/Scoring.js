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
    score.dataPoints.push(emotions)
  }

  //sift through facial data get score
  const getEmotionalScore = emotionsobj => {
    for (let key in emotionsobj) {
      if (key !== 'total') {
        emotionsobj[key] = emotionsobj[key] / emotionsobj.total
        emotionsobj[key] = Math.round((emotionsobj[key] *= 100))
      }
    }

    emotionsobj.total = emotionsobj.total * 100
    const sorted = Object.entries(emotionsobj).sort((a, b) => b[1] - a[1])
    score.topThree.push(sorted[1], sorted[2], sorted[3])
  }

  // sift through transcript and fillerwords get a score
  const getTranscriptScore = (transcriptArr, fillersObj) => {
    let transcriptScore = 0
    let wordCount = transcriptArr.length
    let fillerCount = fillersObj.total
    let percentFiller = fillerCount / wordCount
    if (percentFiller < 1) transcriptScore += 10
    if (percentFiller < 1) transcriptScore += 10
    if (percentFiller < 1) transcriptScore += 10
    if (percentFiller < 1) transcriptScore += 10
    if (percentFiller < 1) transcriptScore += 10
    if (percentFiller < 1) transcriptScore += 10
    if (percentFiller < 1) transcriptScore += 10
  }

  /// get final score add to score object
  score.finalScore =
    (getEmotionalScore(emotions) +
      getTranscriptScore(transcript, fillerWords)) /
    2

  /// get message add to score object
  let messageScore = score.finalScore
  const message = fScore => {
    if (fScore >= 93)
      return 'Congratulations you have proven your ready for that interview '
    if (fScore < 93 && fScore >= 85) return 'You did really well'
    if (fScore < 85 && fScore >= 75)
      return 'You did good but consider brushing up on your habits'
    if (fScore < 75 && fScore >= 50)
      return 'You did ok but you should definatly work on improving '
    else
      return ' You did not do so well check out or tips and tricks section to help improve your scores'
  }
  score.message = message(messageScore)

  // return final score object
  return score
}
