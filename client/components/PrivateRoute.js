import React from 'react'
import {Route} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import LogIn from './LogIn'

function PrivateRoute({component: Component, ...rest}) {
  const {currentUser} = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <LogIn />
      }}
    ></Route>
  )
}

export default PrivateRoute
