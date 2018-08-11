import { LOADING, AUTHED, SHOW_MENU } from './actions'
import firebase from 'firebase/app'
import 'firebase/auth'

export const isLoading = value => ({ type: LOADING, value })

export const authed = value => ({ type: AUTHED, value })

export const showMenu = () => ({ type: SHOW_MENU })

export const onLogin = () => {
  return dispatch => {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(result => {
        dispatch(authed(true))
      })
      .catch(err => console.log(`Error: ${err.code}: ${err.message}`))
  }
}

export const signOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(authed(false))
      })
      .catch(() => console.log('Error al desconectarse de Google'))
  }
}
