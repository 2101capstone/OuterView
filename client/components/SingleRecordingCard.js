import React from 'react'

const SingleRecordingCard = props => {
  let {session} = props

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
          <p className="card-text">Overall Happiness</p>
          <p className="card-text">Transcript: {session.transcript}</p>
          <p className="card-text">
            <small className="text-muted">
              {session.date.toDate().toDateString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleRecordingCard
