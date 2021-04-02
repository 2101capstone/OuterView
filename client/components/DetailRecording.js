import React from 'react'
import {Button} from 'react-bootstrap'
import WordCloud from './WordCloud'
import PieChart from './PieChart'
import {
  removeUserSession,
  deleteSession,
  deleteCloudVideo
} from './firebaseHelperFunc'
import {countFiller, fillerWords} from './speechHelperFunc'
import {useHistory} from 'react-router-dom'

const DetailRecording = props => {
  const history = useHistory()
  const {setSelected, setSesDetail} = props
  const session = props.session[0]
  const transcript = session.transcript
  countFiller(session.transcript)

  const deleteVideo = () => {
    removeUserSession(session.uid, session.sessionId)
      .then(deleteSession(session.sessionId))
      .then(deleteCloudVideo(session.sessionId))
    setSesDetail([])
    setSelected(null)
    history.push('/recordings')
  }

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
          <h5 className="card-title">Transcript</h5>
          <div className="trans-div">
            {transcript
              .split(' ')
              .map(word =>
                fillerWords[word] ? (
                  <span className="highlight">{`${word} `}</span>
                ) : (
                  <span>{`${word} `}</span>
                )
              )}
          </div>
          <h5 className="card-title">{session.date.toDate().toDateString()}</h5>
          <WordCloud transcript={session.transcript} />
          <PieChart emotions={session.score.emotions} />
          <Button
            variant="secondary"
            onClick={() => {
              setSelected(null)
            }}
          >
            Go Back
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteVideo()
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DetailRecording
