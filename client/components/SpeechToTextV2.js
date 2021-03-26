import React from 'react'

const SpeechToTextV2 = props => {
  const {words, isRecord} = props
  return (
    <>
      <h1 className="h1-transcripts">Transcripts</h1>
      <div className="container">
        <div className="transcripts-div">
          <h2>Current Transcript</h2>
          {isRecord ? <span>Speaking...</span> : <span>Not Recording</span>}
          <div>
            {words.map(word => (
              <p key={word}>{word}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SpeechToTextV2
