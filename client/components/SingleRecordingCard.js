import React from 'react'

const SingleRecordingCard = props => {
  return (
    <div className="row g-0">
      <div className="col-md-4">
        <video width="500" height="300" controls>
          <source type="video/mp4"></source>
        </video>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="card-text">SRC Score Here</p>
          <p className="card-text">SRCFillerWord Count</p>
          <p className="card-text">SRC Emotion Results Score</p>
          <p className="card-text">
            <small className="text-muted">Date: Last posted 2 days ago</small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleRecordingCard
