import React from 'react'
import {Route} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import {toast} from 'react-toastify'
import LogIn from './LogIn'

function PrivateRoute({component: Component, ...rest}) {
  const {currentUser} = useAuth()

  if (!currentUser) {
    toast.error('Cannot view page unless logged in')
  }

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
