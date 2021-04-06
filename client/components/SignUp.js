import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert, Container} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import {createUserDoc} from './firebaseHelperFunc'

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!')
    }
    try {
      setError('')
      setLoading(true)
      const {user} = await signup(
        emailRef.current.value,
        passwordRef.current.value
      )
      // create a new user doc by getting the user
      createUserDoc(user.uid, {email: emailRef.current.value})
      history.push('/dashboard')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div className="testBGpage">
      <div className="BGpage"></div>
      <div className="allText">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{minHeight: '100vh'}}
        >
          <div className="w-100" style={{maxWidth: '400px'}}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
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
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
              <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  )
}
export default SignUp
