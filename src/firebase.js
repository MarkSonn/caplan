import fb from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/storage'
import 'firebase/auth'

// import { GeoCollectionReference, GeoFirestore, GeoQuery, GeoQuerySnapshot } from 'geofirestore'

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
export const auth = firebase.auth()
// const geofirestore = new GeoFirestore(firestore)
// export const donationLocations = geofirestore.collection('donations')
// export const query: GeoQuery = geocollection.near({ center: new firebase.firestore.GeoPoint(40.7589, -73.9851), radius: 1000 });
// Storage refs
// export const blah = firebase.storage().ref().child('blah')

// Database functions
export const submitDonation = async (donation) => firestore.collection('donations').add(donation)
export const getDonations = async () => {
  const snapshot = await firestore.collection('donations').get()
  return snapshot.docs.map(doc => doc.data())
}
// export const getDonation = async (donation) => firestore.collection('donations').add(donation)

/** * Example usage: ***/
// First add this to the imports:
// import { submitDonation } from '@/firebase'

// Then add the following code to the `export default {}` object
// methods: {
//   async onFormSubmission () {
//     try {
//       const response = await submitDonation({ a: 'a', b: 'b' })
//       console.log('Doc:', response)
//     } catch (error) {
//       console.log('ERROR is submitDonation')
//       return
//     }
//   }
// }
