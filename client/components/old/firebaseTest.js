import {storage} from './firebase'
import React, {useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

const FirebaseTest = () => {
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState('')

  const handleChange = event => {
    if (event.target.files[0]) {
      setImage(event.target.files[0])
      console.log('file saved')
    }
  }

  const handleUpload = event => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      snapshop => {},
      error => {
        console.log(error)
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url)
            setUrl(url)
          })
      }
    )

    // if (event.target.files[0]) {
    //   setImage(event.target.files[0])
    //   console.log('hello')
  }

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
