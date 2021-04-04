import React, {useEffect, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {DetailRecording, SingleRecCardV2} from './index'
import firebase from './firebase'
import {useLocation} from 'react-router-dom'

const AllRecordings = () => {
  const location = useLocation()
  const {currentUser} = useAuth() //current user signed in
  const [sesDetail, setSesDetail] = useState([])
  const [selected, setSelected] = useState(null)

  // useEffect(() => {
  //   console.log(('sessionId: ', location.state.sessionId))
  //   //setSelected(location.state.sessionId)
  // }, [])

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
    // .then(() => {
    console.log(location.state)
    // })
  }, [])

  return (
    <div>
      {selected ? '' : <h1 className="recordings-title">All Recordings</h1>}
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
            <SingleRecCardV2
              session={session}
              setSesDetail={setSesDetail}
              setSelected={setSelected}
              key={session.sessionId}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default AllRecordings
