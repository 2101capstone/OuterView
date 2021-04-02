import React, {useEffect, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {DetailRecording, SingleRecCardV2} from './index'
import firebase from './firebase'

const AllRecordings = () => {
  const {currentUser} = useAuth() //current user signed in
  const [sesDetail, setSesDetail] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    firebase
      .firestore()
      .collection('Sessions')
      .where('uid', '==', currentUser.uid)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          setSesDetail(prev => [...prev, {...doc.data(), sessionId: doc.id}])
        })
      })
  }, [])

  return (
    <div>
      <h1 className="recordings-title">All Recordings</h1>
      <div className="SRCorDetail">
        {selected ? (
          <div>
            <DetailRecording
              setSesDetail={setSesDetail}
              setSelected={setSelected}
              session={sesDetail.filter(
                session => session.sessionId === selected
              )}
            />
          </div>
        ) : (
          sesDetail.map(session => (
            <div key={session.sessionId}>
              <SingleRecCardV2 session={session} setSelected={setSelected} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AllRecordings
