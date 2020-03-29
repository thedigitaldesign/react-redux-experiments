// Packages
import * as enzyme from 'enzyme'

// Models
import { Todo } from '../../models'

// Types
import * as type from '../types'

// Reducer
import TodoListReducer from './reducer'

describe('Todo List Reducer', () => {
  const todoItem: Todo = {
    id: 1,
    title: 'Make more tests',
    description: 'More tests are needed',
  }

  it('should return default initial state when no action is passed', () => {
    const newState = TodoListReducer(null, {
      type: type.TodoListTypes.TODO_LIST,
      payload: null,
    })
    expect(newState).toEqual(null)
  })

  it('should return list upon receiving an action of type `TODO_LIST`', () => {
    const newState = TodoListReducer(null, {
      type: type.TodoListTypes.TODO_LIST,
      payload: [todoItem]
    })
    expect(newState).toEqual([todoItem])
  })
})
