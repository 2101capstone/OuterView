import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'
import history from './history'
import App from './app'

ReactDOM.render(
  <Router history={history}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById('app')
)
