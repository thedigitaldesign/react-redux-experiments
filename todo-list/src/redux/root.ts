// Packages
import { combineReducers } from 'redux'

// Reducers
import TodoList from './TodoList/reducer'

export const RootReducer = combineReducers({
  TodoList,
})
