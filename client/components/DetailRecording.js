import React from 'react'
import {Button} from 'react-bootstrap'
import WordCloud from './WordCloud'

const DetailRecording = props => {
  const {setSelected} = props
  const session = props.session[0]
  console.log('transcrip--->', session.transcript)

  return (
    <div>
      <div className="card mb-3 ">
        <video
          className="single-recoding-vid"
          width="640"
          height="480"
          controls
        >
          <source src={session.url} type="video/webm"></source>
        </video>
        <div className="card-body">
          <h5 className="card-title">Transcript: {session.transcript}</h5>
          <h5 className="card-title">{session.date.toDate().toDateString()}</h5>
          <WordCloud transcript={session.transcript} />
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
      {/* <div className="word-cloud-div">
        <WordCloud transcript={session.transcript} />
      </div> */}
    </div>
  )
}

export default DetailRecording
