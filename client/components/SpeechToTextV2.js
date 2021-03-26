import React from 'react'

const SpeechToTextV2 = props => {
  const {words, isRecord} = props
  return (
    <>
      <div className="container">
        <div className="transcripts-div">
          {isFaceRec ? <span>Speaking...</span> : <span>Not Recording</span>}
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
