import React from 'react'
import {Route} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import ToastNotification from './ToastNotification'

function PrivateRoute({component: Component, ...rest}) {
  const {currentUser} = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        // return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        return currentUser ? <Component {...props} /> : <ToastNotification />
      }}
    ></Route>
  )
}

export default PrivateRoute
