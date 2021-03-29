import React from 'react'

const SingleRecording = () => {
  return (
    <div>
      <div className="card mb-3 ">
        <video
          className="single-recoding-vid"
          width="1000"
          height="750"
          controls
        >
          <source type="video/mp4"></source>
        </video>
        <div className="card-body">
          <h5 className="card-title">Transcript</h5>
          <text className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </text>
        </div>
      </div>
    </div>
  )
}

export default SingleRecording
