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
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Name:</strong> {currentUser.displayName}
            <div>
              <strong>Email:</strong> {currentUser.email}
            </div>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default ProfilePage

// < div className = 'container' >
//   <div className='row d-flex justify-content-center'>
//     <div className='col-md-10 mt-5 pt-5'>
//       <div className='row z-depth-3'>
//         <div className='col-sm-4 bg-info rounded-left'>
//           <div className='card-block text-center text-white'>
//             <i className='fas fa-user-tie fa-7x mt-5'></i>
//             <h2 className='font-weigh-bold mt-4'>MichaelBusto</h2>
//           </div>

//         </div>
//       </div>
//     </div>
//   </div>
//     </div >
