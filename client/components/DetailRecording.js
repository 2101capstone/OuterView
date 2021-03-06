import React from 'react'
import {Button} from 'react-bootstrap'
import WordCloud from './WordCloud'
import PieChart from './PieChart'
import {toast} from 'react-toastify'
import {countFiller, fillerWords} from './speechHelperFunc'
import {useHistory} from 'react-router-dom'
import {
  removeUserSession,
  deleteSession,
  deleteCloudVideo
} from './firebaseHelperFunc'

const DetailRecording = props => {
  const history = useHistory()
  const {setSelected, setSesDetail} = props
  const session = props.session[0]
  const transcript = session.transcript
  countFiller(session.transcript)

  const deleteVideo = () => {
    removeUserSession(session.uid, session.sessionId)
      .then(deleteSession(session.sessionId))
      .then(deleteCloudVideo(session.sessionId))
    setSesDetail([])
    setSelected(null)
    toast.error('Your OuterView has been deleted')
    history.push('/recordings')
  }

  return (
    <div className="details-div">
      <div className="details-mike">
        {isNaN(session.score.finalScore) ? (
          <div></div>
        ) : (
          <WordCloud transcript={session.transcript} />
        )}
        <video className="vid-mike" width="640" height="480" controls>
          <source src={session.url} type="video/webm"></source>
        </video>
        {isNaN(session.score.finalScore) ? (
          <div></div>
        ) : (
          <PieChart emotions={session.score.emotions} />
        )}
      </div>
      <div className="details-buttons">
        <button type="button" className="buttonTwo" onClick={deleteVideo}>
          Delete
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            setSelected(null)
          }}
        >
          Go Back
        </button>
      </div>
      <div className="trans-details-page">
        <h5 className="">{session.date.toDate().toDateString()}</h5>
        {transcript.split(' ').map(word =>
          fillerWords[word] ? (
            <span className="highlight">{`${word} `}</span> // add key
          ) : (
            <span>{`${word} `}</span> //add key
          )
        )}
      </div>
      <div className="score-words">
        <h1 className="score-h1">Final Score: {session.score.finalScore}%</h1>
        <h1 className="score-h1">
          Filler Words Used:
          <span className="fillword-span"> {session.fillerWords.TOTAL}</span>
        </h1>
      </div>
    </div>
  )
}

export default DetailRecording
