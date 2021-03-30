import React, {useEffect, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import SingleRecordingCard from './SingleRecordingCard'
import firebase, {storage} from './firebase'

const SavedRecordings = () => {
  const {currentUser} = useAuth() //current user signed in
  const [sessionIds, setSessionIds] = useState([])
  const [sesDetail, setSesDetail] = useState([])

  useEffect(() => {
    console.log('uid:', currentUser.uid)
    //Set sessionId from User Doc to state
    let docRef = firebase
      .firestore()
      .collection('Users')
      .doc(currentUser.uid)
    docRef.get().then(doc => {
      setSessionIds(doc.data().sessionId)
    })
  }, [])

  //Pull
  useEffect(() => {
    if (sessionIds) {
      console.log('session Ids:', sessionIds)
      let docRef = firebase
        .firestore()
        .collection('Sessions')
        .doc(sessionIds[0])

      docRef.get().then(doc => {
        setSesDetail(doc.data())
      })
    }
  }, [sessionIds])

  return (
    <div>
      <h1 className="recordings-title">Past Recordings</h1>
      <div className="card mb-3">
        <SingleRecordingCard fw={sesDetail} />
      </div>
    </div>
  )
}

export default SavedRecordings
