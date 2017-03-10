/**
 * Created by joshjahans on 10/03/2017.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const dummyReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}

const logger = createLogger()
const initialiseStore = (initialState = {}) => {
  const reducers = combineReducers({
    dummyReducer
  })
}