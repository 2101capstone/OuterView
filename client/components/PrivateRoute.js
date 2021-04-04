import React from 'react'
import {Route} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import {toast} from 'react-toastify'

function PrivateRoute({component: Component, ...rest}) {
  const {currentUser} = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          toast.warning('Cannot view page unless logged in')
        )
      }}
    ></Route>
  )
}

export default PrivateRoute
