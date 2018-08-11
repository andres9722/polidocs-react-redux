import { LOADING, AUTHED, SHOW_MENU } from '../actions'

export const loading = (state = true, action) =>
  (action.type === LOADING ? action.value : state)

export const authed = (state = false, action) =>
  (action.type === AUTHED ? action.value : state)

export const showMenu = (state = false, action) =>
  (action.type === SHOW_MENU ? !state : state)
