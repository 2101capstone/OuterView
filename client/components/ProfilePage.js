import React, {useState} from 'react'
import {Card, Button, Alert, Container} from 'react-bootstrap'
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
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: '100vh'}}
    >
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
          <Card.Img variant="top" src={currentUser.photoURL} />
          <Card.Body>
            <h2 className="text-center mb-4">
              Welcome, {currentUser.displayName}
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div>
              <strong>Email:</strong> {currentUser.email}
            </div>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
            <Button variant="primary" onClick={handleLogout}>
              Log Out
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default ProfilePage
