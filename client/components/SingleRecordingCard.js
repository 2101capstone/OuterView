import React from 'react'
import {Button} from 'react-bootstrap'
const SingleRecordingCard = props => {
  const {session, setSelected} = props

  return (
    <div className="row g-0">
      <div className="col-md-4">
        <video width="400" height="300" controls>
          <source src={session.url} type="video/webm"></source>
        </video>
      </div>
      <div className="textNButton">
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">Score{` ${session.score.finalScore}%`}</p>
            <p className="card-text">
              Filler Words Used: {session.fillerWords.TOTAL}
            </p>
            <p className="card-text">
              Emotions:{' '}
              {`${session.score.emotions[0]}, ${session.score.emotions[1]}, ${session.score.emotions[2]}`}
            </p>
            <p className="card-text">
              <small className="text-muted">
                {session.date.toDate().toDateString()}
              </small>
            </p>
          </div>
        </div>
        <Button
          variant="secondary"
          onClick={() => {
            setSelected(session.sessionId)
          }}
        >
          View Details
        </Button>
      </div>
    </div>
  )
}

export default SingleRecordingCard
