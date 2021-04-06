import React, {useState, useEffect} from 'react'
import {Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import '../../public/auth.css'
import firebase from './firebase'

const ProfilePage = () => {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const history = useHistory()
  const [sessions, setSessions] = useState([])
  const [avgScore, setAvgScore] = useState(null)

  async function handleLogout() {
    setError('')
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection('Sessions')
      .orderBy('date', 'desc')
      .where('uid', '==', currentUser.uid)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          setSessions(prev => [...prev, {...doc.data(), sessionId: doc.id}])
        })
      })
  }, [])

  useEffect(() => {
    let inter = []
    sessions.forEach(ses => {
      if (ses.score.finalScore) {
        inter.push(ses.score.finalScore)
      }
    })
    setAvgScore(inter.reduce((a, b) => a + b, 0) / inter.length)
  }, [])

  return (
    <div className="testBGpage">
      <div className="profile-div">
        <div className="container mt-5 d-flex justify-content-center">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <div className="image">
                {' '}
                <img
                  src={currentUser.photoURL}
                  className="rounded"
                  width="155"
                />{' '}
              </div>
              <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0">{currentUser.displayName}</h4>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                  <div className="d-flex flex-column">
                    {' '}
                    <span className="articles">Videos</span>
                    <span className="number1">{sessions.length}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="rating"> Avg Score</span>
                    <span className="number3">
                      {isNaN(avgScore) ? 0 : avgScore}%
                    </span>
                  </div>
                </div>
                <div className="button mt-2 d-flex flex-column align-items-center">
                  <Link to="/update-profile">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary w-100 ml-2"
                    >
                      Update Profile
                    </button>
                  </Link>
                </div>
                <div className="button mt-2 d-flex flex-row align-items-center">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary w-100 ml-2"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
