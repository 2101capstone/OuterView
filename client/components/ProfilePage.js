import React, {useState} from 'react'
import {Card, Button, Alert, Container} from 'react-bootstrap'
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
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{minHeight: '100vh'}}
    // >
    //   <div className="w-100" style={{maxWidth: '400px'}}>
    //     <Card>
    //       <Card.Img variant="top" src={currentUser.photoURL} />
    //       <Card.Body>
    //         <h2 className="text-center mb-4">
    //           Welcome, {currentUser.displayName}
    //         </h2>
    //         {error && <Alert variant="danger">{error}</Alert>}
    //         <div>
    //           <strong>Email:</strong> {currentUser.email}
    //         </div>
    //         <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
    //           Update Profile
    //         </Link>
    //         <Button variant="primary" onClick={handleLogout}>
    //           Log Out
    //         </Button>
    //       </Card.Body>
    //     </Card>
    //   </div>
    // </Container>
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
                <span className="articles">Videos</span>{' '}
                <span className="number1">38</span>{' '}
              </div>
              <div className="d-flex flex-column">
                <span className="followers">Followers</span>{' '}
                <span className="number2">980</span>{' '}
              </div>
              <div className="d-flex flex-column">
                <span className="rating">Rating</span>{' '}
                <span className="number3">8.9</span>{' '}
              </div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <button
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
