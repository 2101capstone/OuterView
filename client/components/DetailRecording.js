import React from 'react'
import {Button} from 'react-bootstrap'

const DetailRecording = props => {
  const {setSelected} = props
  const session = props.session[0]

  return (
    <div>
      <div className="card mb-3 ">
        <video
          className="single-recoding-vid"
          width="1000"
          height="750"
          controls
        >
          <source src={session.url} type="video/webm"></source>
        </video>
        <div className="card-body">
          <h5 className="card-title">Transcript {session.transcript}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              setSelected(null)
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DetailRecording
