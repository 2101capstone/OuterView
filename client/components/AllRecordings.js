import React, {useEffect, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {DetailRecording, SingleRecCardV2} from './index'
import firebase from './firebase'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AllRecordings = () => {
  const {currentUser} = useAuth() //current user signed in
  const [sesDetail, setSesDetail] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    firebase
      .firestore()
      .collection('Sessions')
      .orderBy('date', 'desc')
      .where('uid', '==', currentUser.uid)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          setSesDetail(prev => [...prev, {...doc.data(), sessionId: doc.id}])
        })
      })
  }, [])

  useEffect(() => {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      console.log('Chrome Detected')
    } else {
      toast.error(
        'Your browser is not fully compatible. Please try visiting on a desktop verison of Google Chrome for the best experience',
        {
          position: 'bottom-right',
          hideProgressBar: false,
          autoClose: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        }
      )
    }
  }, [])

  return (
    <div>
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
