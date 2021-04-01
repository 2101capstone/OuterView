import React, {useEffect} from 'react'
import {useAuth} from '../contexts/AuthContext'

const Navbar = () => {
  //const {currentUser} = useAuth()

  // useEffect(() => {
  //   console.log('CU', currentUser)
  // }, [])

  return (
    <div>
      <nav>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img alt="" src="logo.jpg" />
              </a>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav nav-fill w-100">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/record"
                    >
                      Record
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/dashboard"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/recordings"
                    >
                      All Recordings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/learnmore"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
