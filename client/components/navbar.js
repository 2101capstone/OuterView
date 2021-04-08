import React from 'react'
import {useAuth} from '../contexts/AuthContext'

const Navbar = () => {
  const {currentUser} = useAuth()

  return (
    <nav className="navbar navbar-expand navbar-dark bg-black">
      <a className="navbar-brand" href="/">
        <img alt="" src="White.png" height="35" width="35" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/record">
            Record Now <span className="sr-only">(current)</span>
          </a>
          {currentUser ? (
            ''
          ) : (
            <a className="nav-item nav-link" href="/login">
              Log in
            </a>
          )}
          <a className="nav-item nav-link" href="/profile">
            Profile
          </a>
          {currentUser ? (
            <a className="nav-item nav-link" href="/recordings">
              All Recordings
            </a>
          ) : (
            ''
          )}
          <a className="nav-item nav-link" href="/about">
            About Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
