import {Chart, Cloud, Transform} from 'rumble-charts'
import {fillerWords} from './speechHelperFunc'
import React from 'react'

const WordCloud = props => {
  let {transcript} = props
  if (transcript) {
    const seriesConstruct = () => {
      const wordCount = str => {
        let words = {}
        str.split(' ').forEach(word => {
          if (words[word]) {
            if (fillerWords[word] === 0) {
              words[word] = words[word] * 2
            } //if Filler word, put extra weight on it
            words[word]++
          } else {
            words[word] = 1
          }
        })
        return words
      }

      const countedWords = wordCount(transcript)

      let wordsArr = []

      Object.keys(countedWords).forEach(word => {
        let obj = {}
        obj.label = word
        obj.y = countedWords[word]
        wordsArr.push(obj)
      })

      return wordsArr
    }

    var series = [{data: seriesConstruct()}]
  }

  return (
    <div className="cloud-div">
      <Chart width={500} height={400} series={series} minY={0}>
        <Transform method="transpose">
          <Cloud
            font="Helvetica"
            minFontSize={10}
            maxFontSize={72}
            padding={3}
            labelVisible={true}
          />
        </Transform>
      </Chart>
    </div>
  )
}

export default WordCloud
