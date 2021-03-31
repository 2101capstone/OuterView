import React, {useEffect, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {DetailRecording, SingleRecordingCard} from './index'
import firebase from './firebase'

const AllRecordings = () => {
  const {currentUser} = useAuth() //current user signed in
  const [sesDetail, setSesDetail] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    let query = firebase
      .firestore()
      .collection('Sessions')
      .where('uid', '==', currentUser.uid)

    query.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //console.log(doc.id, ' => ', doc.data())
        setSesDetail(prev => [...prev, {...doc.data(), key: doc.id}])
      })
    })
  }, [])

  return (
    <div>
      <h1 className="recordings-title">Past Recordings</h1>
      <div className="card mb-3">
        {selected ? (
          <div>
            <DetailRecording
              setSelected={setSelected}
              session={sesDetail.filter(session => session.key === selected)}
            />
          </div>
        ) : (
          sesDetail.map(session => (
            <div key={session.key} className="src">
              <SingleRecordingCard
                session={session}
                setSelected={setSelected}
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AllRecordings
