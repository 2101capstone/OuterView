import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD_rsUpEpEj_YxMmD5tEpB2oq30BPYNXYs',
  authDomain: 'auth.outerview.xyz',
  //authDomain: 'interviewprep-fsa.firebaseapp.com',
  projectId: 'interviewprep-fsa',
  storageBucket: 'interviewprep-fsa.appspot.com',
  messagingSenderId: '435616300544',
  appId: '1:435616300544:web:6019676eb83e7b8af6e2e5'
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
export const db = firebase.firestore()
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

//db.settings({timeStampsInSnapshots: true})

export {storage, provider, firebase as default}
