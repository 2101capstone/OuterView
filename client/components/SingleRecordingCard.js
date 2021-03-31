import React from 'react'
import {Button} from 'react-bootstrap'
const SingleRecordingCard = props => {
  const {session, setSelected} = props

  return (
    <div className="row g-0">
      <div className="col-md-4">
        <video width="500" height="300" controls>
          <source src={session.url} type="video/webm"></source>
        </video>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="card-text">SRC Score Here</p>
          <p className="card-text">{session.fillerWords.TOTAL} Filler Words</p>
          <p className="card-text">Overall Happiness Score</p>
          <p className="card-text">
            <small className="text-muted">
              {session.date.toDate().toDateString()}
            </small>
            <Button
              variant="secondary"
              onClick={() => {
                setSelected(session.key)
              }}
            >
              View More
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleRecordingCard
