import firebase from './firebase'

export const handleUpload = async (transcript, fillerWords) => {
  //upload to Firebase
  console.log('check the format:', typeof reactions)
  const res = await firebase
    .firestore()
    .collection('Sessions')
    .add({transcript, fillerWords})

  console.log('Firestore ID:', res.id)
  return res.id
  // .then(() => {
  //   setTitle('')
  //   setTime('')
  //return some success key/confirmation`
}
