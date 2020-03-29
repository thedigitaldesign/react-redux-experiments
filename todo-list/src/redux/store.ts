// Packages
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Root Reducer
import { RootReducer } from './root'

export default createStore(RootReducer, applyMiddleware(thunk, logger))
