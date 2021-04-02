import {Chart, Pies, Transform} from 'rumble-charts'
import React from 'react'

const PieChart = props => {
  let {emotions} = props
  if (emotions) {
    const seriesConstruct = array => {
      let emotionsArr = []
      for (let i = 0; i < array.length - 1; i++) {
        let current = array[i].slice(0, -1)
        current = current.split(' ')
        emotionsArr.push(Number(current[1]))
      }

      return emotionsArr
    }
    var series = [{name: 'Happy', data: seriesConstruct(emotions)}]
  }

  return (
    <div>
      <h3>Emotions</h3>
      <div className="Pie0">{emotions[0]}</div>
      <div className="Pie1">{emotions[1]}</div>
      <div className="Pie2">{emotions[2]}</div>
      <div className="Pie3">{emotions[3]}</div>
      <div className="Pie4">{emotions[4]}</div>
      <div className="Pie5">{emotions[5]}</div>
      <div className="Pie6">{emotions[6]}</div>
      <Chart width={600} height={250} series={series}>
        <Transform method={['transpose', 'stack']}>
          <Pies combined={true} />
        </Transform>
      </Chart>
    </div>
  )
}

export default PieChart
