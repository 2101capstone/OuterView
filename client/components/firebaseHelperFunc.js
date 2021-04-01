import firebase, {storage} from './firebase'

//Create new session document with data
export const addToFirestore = async data => {
  const res = await firebase
    .firestore()
    .collection('Sessions')
    .add({...data, date: firebase.firestore.FieldValue.serverTimestamp()})
  return res.id
}

// add data to a particular session document
export const updateDocument = async (data, docId) => {
  const res = await firebase
    .firestore()
    .collection('Sessions')
    .doc(docId)
    .update(data)
  return res
}

// creating user doc from auth UID
export const createUserDoc = async (uid, data) => {
  const userRef = await firebase
    .firestore()
    .collection('Users')
    .doc(uid)
    .set(data)
  return userRef
}

//upload any given file to fire storage. New feat: add a 2nd param for upload loc
export const addToStorage = (recordedChunks, docId) => {
  if (recordedChunks.length) {
    const blob = new Blob(recordedChunks, {
      type: 'video/webm'
    })
    const uploadTask = storage.ref(`recording/${docId}.webm`).put(blob)
    uploadTask.on(
      'state_changed',
      snapshop => {},
      error => {
        console.log(error)
      },
      () => {
        storage
          .ref()
          .child(`recording/${docId}.webm`)
          .getDownloadURL()
          .then(url => {
            console.log('Public Url: ', url)
            updateDocument({url}, docId)
          })
      }
    )

    const videoUrl = storage
      .ref()
      .child(`recording/${docId}.webm`)
      .getDownloadURL()
    return videoUrl
  }
}

//Add session id to User Doc
export const pushToUserDoc = async (uid, docId) => {
  await firebase
    .firestore()
    .collection('Users')
    .doc(uid)
    .update({sessionId: firebase.firestore.FieldValue.arrayUnion(docId)})
}

//Remove session id from user doc
export const removeUserSession = async (uid, sessionId) => {
  await firebase
    .firestore()
    .collection('Users')
    .doc(uid)
    .update({sessionId: firebase.firestore.FieldValue.arrayRemove(sessionId)})
}

export const deleteSession = async sessionId => {
  await firebase
    .firestore()
    .collection('Sessions')
    .doc(sessionId)
    .delete()
}
