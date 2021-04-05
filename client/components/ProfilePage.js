import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import '../../public/auth.css'

const ProfilePage = () => {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
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
            <div>Email: {currentUser.email}</div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
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
  )
}

export default ProfilePage
