import React, {useContext, useEffect, useState} from 'react'
import {auth} from '../components/firebase'
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    // auth.onAuthStateChange has attached to it a method that will unsubcribe the auth.onAuthStateChanged event
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    // unsubcribes from the event listener when unmounted
    return unsubscribe
  }, [])
  const value = {
    currentUser,
    signup
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
