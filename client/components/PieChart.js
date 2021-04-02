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
      <h3 className="emotions-text">Emotions</h3>
      <div className="piechart-div">
        <ol>
          <li className="Pie0">{emotions[0]}</li>
          <li className="Pie1">{emotions[1]}</li>
          <li className="Pie2">{emotions[2]}</li>
          <li className="Pie3">{emotions[3]}</li>
          <li className="Pie4">{emotions[4]}</li>
          <li className="Pie5">{emotions[5]}</li>
          <li className="Pie6">{emotions[6]}</li>
        </ol>
        <Chart width={400} height={150} series={series}>
          <Transform method={['transpose', 'stack']}>
            <Pies combined={true} />
          </Transform>
        </Chart>
      </div>
    </div>
  )
}

export default PieChart
