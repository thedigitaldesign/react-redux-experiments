import React from 'react'
import Enzyme, { shallow } from 'enzyme'

// Actions
import * as action from './action'

// Types
import * as type from '../types'

describe('Todo List Action', () => {
  it('should return an action with the `TODO_LIST`', () => {
    const todoList = action.GetTodoList()
    expect(todoList).toEqual({ type: type.TodoListTypes.TODO_LIST, payload: [{}] })
  })
})
