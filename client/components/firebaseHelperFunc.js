import firebase, {storage} from './firebase'

export const addToFirestore = async (transcript, fillerWords) => {
  //upload to Firestore
  const res = await firebase
    .firestore()
    .collection('Sessions')
    .add({transcript, fillerWords})
  //console.log('Firestore ID:', res.id)
  return res.id
}

export const updateDocument = async (videoUrl, docId) => {
  const res = await firebase
    .firestore()
    .collection('Sessions')
    .doc(docId)
    .update({videoUrl})
  return res
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
            updateDocument(url, docId)
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
