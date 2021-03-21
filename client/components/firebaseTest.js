import {storage} from './firebase'
import React, {useState} from 'react'

const FirebaseTest = () => {
  const [image, setImage] = useState(null)

  const handleChange = event => {
    if (event.target.files[0]) {
      setImage(event.target.files[0])
      console.log('hello')
    }
  }

  const handleUpload = () => {}

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  )
}

export default FirebaseTest
