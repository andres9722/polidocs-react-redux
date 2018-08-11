import firebase from 'firebase/app'
import 'firebase/firestore/dist/index.cjs'

const config = {
  apiKey: 'AIzaSyC06TWCMDb4TMz4hoy1u7FVf3CugtHXqs4',
  authDomain: 'polidocs-55562.firebaseapp.com',
  databaseURL: 'https://polidocs-55562.firebaseio.com',
  projectId: 'polidocs-55562',
  storageBucket: 'polidocs-55562.appspot.com',
  messagingSenderId: '887675161563'
}

firebase.initializeApp(config)

export const ref = firebase.firestore()
export const firebaseAuth = firebase.auth
