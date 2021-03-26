import React, {useContext, useEffect, useState} from 'react'
import {auth} from '../components/firebase'
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    // auth.onAuthStateChange has attached to it a method that will unsubcribe the auth.onAuthStateChanged event
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    // unsubcribes from the event listener when unmounted
    return unsubscribe
  }, [])
  const value = {
    currentUser,
    login,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
