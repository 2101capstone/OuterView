import React from 'react'
import {Button} from 'react-bootstrap'

const SingleRecCardV2 = props => {
  const {session, setSelected} = props
  return (
    <div className="cardSRC">
      <video controls>
        <source src={session.url} type="video/webm"></source>
      </video>
      <div className="card-body1">
        <h5 className="card-title1">
          {session.date.toDate().toDateString()} Recording
        </h5>
        <p className="card-text1">{session.score.message}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Final Score: {session.score.finalScore}%
        </li>
        <li className="list-group-item">
          Video Emotions: {session.score.emotionalScore}
        </li>
        <li className="list-group-item">
          Filler Words: {session.fillerWords.TOTAL}
        </li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  )

  // return (
  //   <div className="SRC">
  //     <div className="vidCont">
  //       <video width="400" height="300" controls>
  //         <source src={session.url} type="video/webm"></source>
  //       </video>
  //     </div>
  //     <div className="srcTextCont">
  //       <p className="card-text">Score: {session.score.finalScore}%</p>
  //       <p className="card-text">Notes</p>
  //       <p className="text-muted">
  //         Recorded on: {session.date.toDate().toDateString()}
  //       </p>
  //       <Button
  //         variant="btn btn-secondary btn-lg"
  //         onClick={() => {
  //           setSelected(session.sessionId)
  //         }}
  //       >
  //         View Details
  //       </Button>
  //     </div>
  //   </div>
  // )
}

export default SingleRecCardV2
