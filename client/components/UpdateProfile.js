import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert, Container} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

const UpdateProfile = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {currentUser, updatePassword, updateEmail} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!')
    }

    const promises = []
    setLoading(true)
    setError('')
    // check to see if the email is not equal to our current email
    if (emailRef.current.value !== currentUser.email) {
      // if we changed that email then add that to array of promises of updateEmail
      promises.push(updateEmail(emailRef.current.value))
    }
    // if we changed the password
    if (passwordRef.current.value) {
      // add the update version to the promises array
      promises.push(updatePassword(passwordRef.current.value))
    }
    // If the promises are all successful it will then redirect to the dashboard
    Promise.all(promises)
      .then(() => {
        history.push('/dashboard')
      })
      .catch(() => {
        setError('Failed to update account')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: '100vh'}}
    >
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Link to="/dashboard">Cancel</Link>
        </div>
      </div>
    </Container>
  )
}

export default UpdateProfile
