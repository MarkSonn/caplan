import fb from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/storage'
// import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCIscCuEQmN0ezq7WNU4d9yHeToBxiQNl8',
  authDomain: 'yeats-429ae.firebaseapp.com',
  databaseURL: 'https://yeats-429ae.firebaseio.com',
  projectId: 'yeats-429ae',
  storageBucket: 'yeats-429ae.appspot.com',
  messagingSenderId: '466980957167',
  appId: '1:466980957167:web:b95755d9017fb2c6'
}

// Base versions
export const firebaseCore = fb
export const firebase = fb.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
// export const storage = firebase.storage()
// export const auth = firebase.auth()

// Storage refs
// export const blah = firebase.storage().ref().child('blah')
