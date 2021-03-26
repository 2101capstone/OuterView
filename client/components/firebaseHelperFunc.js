import firebase from './firebase'

export const handleUpload = async (transcript, fillerWords) => {
  //upload to Firebase

  const res = await firebase
    .firestore()
    .collection('Sessions')
    .add({transcript, fillerWords})
  return res.id
  // .then(() => {
  //   setTitle('')
  //   setTime('')
  //return some success key/confirmation`
}
