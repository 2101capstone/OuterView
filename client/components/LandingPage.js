import React from 'react'
import WordCloud from './Cloud'

const LandingPage = () => {
  const dummy =
    ' This Line is used as data to show how the following anaytics can be viewd'

  return (
    <div>
      <img
        clasName="landing"
        src="https://venturebeat.com/wp-content/uploads/2018/03/shutterstock_731158624-e1576819636533.jpg?w=1200&strip=all"
      />
      <p>Welcome to outerview</p>
      <h2> Voice Analytics</h2>
      <div className="containerLp">
        <div className="analytics">
          <WordCloud />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
