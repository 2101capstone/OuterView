import React from 'react'

const SavedRecordings = () => {
  return (
    <div>
      <h1 className="recordings-title">Past Recordings/Scores</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <video width="500" height="300" controls>
              <source type="video/mp4"></source>
            </video>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">Score Here</p>
              <p className="card-text">FillerWord Count</p>
              <p className="card-text">Emotion Results Score</p>
              <p className="card-text">
                <small className="text-muted">
                  Date: Last posted 2 days ago
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-4">
            <video width="500" height="300" controls>
              <source type="video/mp4"></source>
            </video>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">Score Here</p>
              <p className="card-text">FillerWord Count</p>
              <p className="card-text">Emotion Results Score</p>
              <p className="card-text">
                <small className="text-muted">
                  Date: Last posted 2 days ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedRecordings
