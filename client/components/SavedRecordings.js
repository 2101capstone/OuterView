import React, {useEffect, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import SingleRecordingCard from './SingleRecordingCard'
import firebase, {storage} from './firebase'

const SavedRecordings = () => {
  const {currentUser} = useAuth() //current user signed in
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    console.log(currentUser.uid)
    //get all sessions from user doc set to sessions state
    //query for all the sessions from sessions state

    let docRef = firebase
      .firestore()
      .collection('Users')
      .doc(currentUser.uid)
    docRef.get().then(doc => {
      console.log('doc data', doc.data())
    })
  }, [])

  return (
    <div>
      <h1 className="recordings-title">Past Recordings</h1>
      <div className="card mb-3">
        <SingleRecordingCard />
      </div>
    </div>
  )
}

export default SavedRecordings
