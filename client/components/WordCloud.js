import {
  // main component
  Chart,
  // graphs
  Bars,
  Cloud,
  Dots,
  Labels,
  Lines,
  Pies,
  RadialLines,
  Ticks,
  Title,
  // wrappers
  Layer,
  Animate,
  Transform,
  Handlers,
  // helpers
  helpers,
  DropShadow,
  Gradient
} from 'rumble-charts'
import React from 'react'

const WordCloud = () => {
  //use this fake data for now
  const transcript =
    // need to pass in the transcript
    'Hello, my name is benny i like to code and wish i could doe all day. where will i be coding next. to code or not to code that is the question'

  if (transcript) {
    const seriesConstruct = () => {
      const wordCount = str => {
        let words = {}
        str.split(' ').forEach(word => {
          if (words[word]) {
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
    <div>
      <Chart width={500} height={500} series={series} minY={0}>
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
      <Chart width={500} height={500} series={series} minY={0}>
        <Transform method="transpose">
          <Bars innerPadding={5} groupPadding={10} />
        </Transform>
      </Chart>

      <Chart width={500} height={500} series={series} minY={0}>
        <Transform method="transpose">
          <Pies innerPadding={5} groupPadding={10} />
        </Transform>
      </Chart>
    </div>
  )
}

export default WordCloud
