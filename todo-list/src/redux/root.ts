// Packages
import { combineReducers } from 'redux'

// Reducers
import Todo from './Todo/reducer'
import TodoList from './TodoList/reducer'

export const RootReducer = combineReducers({
  Todo,
  TodoList,
})
