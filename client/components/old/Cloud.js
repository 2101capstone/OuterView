import {Chart, Bars, Cloud, Pies, Transform} from 'rumble-charts'
import React from 'react'

const WordCloud = props => {
  //use this fake data for now
  const dummydata =
    'one two two three three three four four four four five five five five five six six six six six six seven seven seven seven seven seven seven eight eight eight eight eight eight eight eight nine nine nine nine nine nine nine nine nine ten ten ten ten ten ten ten ten ten ten'

  // test
  let {transcript} = props
  if (!props.transcript) transcript = dummydata
  // need to pass in the transcript

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
      <h3> Word Cloud</h3>
      <Chart width={400} height={400} series={series} minY={0}>
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
      <h3> Bar Graph</h3>
      <Chart width={600} height={300} series={series} minY={0}>
        <Transform method="transpose">
          <Bars innerPadding={5} groupPadding={10} />
        </Transform>
      </Chart>
      <h3> Pie graph</h3>
      <Chart width={400} height={400} series={series} minY={0}>
        <Transform method="transpose">
          <Pies innerPadding={5} groupPadding={10} />
        </Transform>
      </Chart>
    </div>
  )
}

export default WordCloud
