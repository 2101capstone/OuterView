import React from 'react'
import {toast} from 'react-toastify'
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
    toast.error('Your OuterView has been deleted')
  }

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <video controls width="100%">
              <source src={session.url} type="video/webm"></source>
            </video>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">
                {session.date.toDate().toString()} Recording
              </h4>
              <p className="card-text">{session.score.message}</p>
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
                {/* <li className="list-group-item">{session.sessionId}</li> */}
              </ul>
              <div className="details-buttons">
                <button
                  type="button"
                  className="buttonTwo"
                  // variant="btn btn-secondary"
                  onClick={() => {
                    deleteVideo(session.sessionId)
                  }}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="button"
                  // variant="btn btn-secondary"
                  onClick={() => {
                    setSelected(session.sessionId)
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cardSRC">
        <video controls width="75%">
          <source src={session.url} type="video/webm"></source>
        </video>
        <div className="card-body1">
          <h5 className="card-title1">
            {session.date.toDate().toString()} Recording
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
          <div className="details-buttons">
            <button
              type="button"
              className="buttonTwo"
              // variant="btn btn-secondary"
              onClick={() => {
                deleteVideo(session.sessionId)
              }}
            >
              Delete Recording
          </button>
            <button
              type="button"
              className="button"
              // variant="btn btn-secondary"
              onClick={() => {
                setSelected(session.sessionId)
              }}
            >
              View More
          </button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default SingleRecCardV2
