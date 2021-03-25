import React from 'react'
import {Navbar} from './components'
import {AuthProvider} from './contexts/AuthContext'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes />
      </AuthProvider>
    </div>
  )
}

export default App
