import React from 'react'
import {Button} from 'react-bootstrap'
import {
  removeUserSession,
  deleteSession,
  deleteCloudVideo
} from './firebaseHelperFunc'

const SingleRecCardV2 = props => {
  const {session, setSelected, setSesDetail} = props

  const deleteVideo = () => {
    removeUserSession(session.uid, session.sessionId)
      .then(deleteSession(session.sessionId))
      .then(deleteCloudVideo(session.sessionId))
    setSesDetail([])
    setSelected(null)
  }

  return (
    <div className="cardSRC">
      <video controls width="75%">
        <source src={session.url} type="video/webm"></source>
      </video>
      <div className="card-body1">
        <h5 className="card-title1">
          {session.date.toDate().toDateString()} Recording
        </h5>
        <p className="card-text1">{session.score.message}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Final Score: {session.score.finalScore}%
        </li>
        <li className="list-group-item">
          Video Excitement: {session.score.emotionalScore}%
        </li>
        <li className="list-group-item">
          Filler Words: {session.fillerWords.TOTAL}
        </li>
        <li className="list-group-item">{session.sessionId}</li>
      </ul>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-outline-danger"
          variant="btn btn-secondary"
          onClick={() => {
            deleteVideo(session.sessionId)
          }}
        >
          Delete Recording
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          variant="btn btn-secondary"
          onClick={() => {
            setSelected(session.sessionId)
          }}
        >
          View More
        </button>
      </div>
    </div>
  )
}

export default SingleRecCardV2
