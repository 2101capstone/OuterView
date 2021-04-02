import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert, Container} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {auth, provider} from '../components/firebase'
import {Link, useHistory} from 'react-router-dom'
import GoogleButton from 'react-google-button'
import {createUserDoc} from './firebaseHelperFunc'

const LogIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      const {user} = await login(
        emailRef.current.value,
        passwordRef.current.value
      )
      createUserDoc(user.uid, {email: emailRef.current.value})
      history.push('/record')
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
  }

  async function signInWithGoogle(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      const {user} = await auth.signInWithPopup(provider)
      // create user doc for google
      createUserDoc(user.uid, {email: user.email})
      console.log('user', user)
      history.push('/record')
    } catch {
      setError('Failed To Sign in')
    }
    setLoading(false)
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: '100vh'}}
    >
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
              <Form.Group>
                <div>
                  <GoogleButton
                    disabled={loading}
                    className="w-100"
                    onClick={signInWithGoogle}
                  >
                    Sign In With Google
                  </GoogleButton>
                </div>
              </Form.Group>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Container>
  )
}
export default LogIn
