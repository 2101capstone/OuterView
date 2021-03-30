import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

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
    <>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3" />
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
      {/* <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10 mt-5 pt-5'>
            <div className='row z-depth-3'>
              <div className='col-sm-4 bg-info rounded-left'>
                <div className='card-block text-center text-white'>
                  <i className='fas fa-user-tie fa-7x mt-5'></i>
                  <h2 className='font-weigh-bold mt-4'>MichaelBusto</h2>
                </div>

              </div>
            </div>
          </div>
        </div> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="div-box">
              <div className="User-img">
                <img src="/images/user-icon.jpg"></img>
              </div>
              <h3 className="User-name">Rajnish Kumar</h3>
              <h4 className="designation">Web Developer</h4>
              <div className="contact-btn">
                <button type="button" className="btn btn-success">
                  Follow
                </button>
                <button type="button" className="btn btn-secondary">
                  Message
                </button>
              </div>
              <div className="profile-details">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-home"></i> Overview
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-user"></i> User Info
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-check"></i> Tasks
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-flag"></i> Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
