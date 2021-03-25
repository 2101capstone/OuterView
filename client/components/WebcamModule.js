import React, {useState, useEffect} from 'react'
import Videoplayer from './Videoplayer'

const WebcamModule = () => {
  const [showTranscript, setShowTranscript] = useState(false)
  return (
    <div>
      <div>
        <Videoplayer />
      </div>
      <button
        type="button"
        onClick={() => setShowTranscript(prevState => !prevState)}
      >
        {showTranscript ? 'Hide Transcription' : 'Show Transcription'}
      </button>
      {showTranscript ? '<LiveTranscription />' : '<div />'}
    </div>
  )
}

export default WebcamModule
