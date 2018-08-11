import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './reducers'

const logger = store => next => action => {
  console.log('dispatching: ', action)
  let result = next(action)
  console.log('next state: ', store.getState())
  return result
}

export default createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(logger, thunk))
)
