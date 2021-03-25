import React, {useState, useEffect} from 'react'

const WebcamModule = () => {
  const [showTranscript, setShowTranscript] = useState(false)
  return (
    <div>
      {/* <Videoplayer /> */}
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
