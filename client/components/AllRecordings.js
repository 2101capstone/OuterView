import React, {useEffect, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import SingleRecordingCard from './SingleRecordingCard'
import firebase from './firebase'

const AllRecordings = () => {
  const {currentUser} = useAuth() //current user signed in
  const [sesDetail, setSesDetail] = useState([])

  useEffect(() => {
    let query = firebase
      .firestore()
      .collection('Sessions')
      .where('uid', '==', currentUser.uid)

    query.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data())
        setSesDetail(prev => [...prev, {...doc.data(), key: doc.id}])
      })
    })
  }, [])

  return (
    <div>
      <h1 className="recordings-title">Past Recordings</h1>
      <div className="card mb-3">
        {sesDetail.map(detail => (
          <div key={detail.key} className="src">
            <SingleRecordingCard session={detail} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllRecordings
