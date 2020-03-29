import React from 'react'
import { shallow } from 'enzyme'

// Models
import { Todo } from '../../models'

// Components
import * as action from './action'

// Types
import * as type from '../types'

describe('Todo Action', () => {
  const todoItem: Todo = {
    id: 1,
    title: 'Make more tests',
    description: 'More tests are needed',
  }

  it('should return an action with the `TODO_ITEM`', () => {
    const addItem = action.AddTodoItem(todoItem)
    expect(addItem).toEqual({ type: type.TodoItemTypes.TODO_ITEM, payload: todoItem })
  })
  it('should return an action with the `TODO_LIST`', () => {
    const todoList = action.GetTodoList()
    expect(todoList).toEqual({ type: type.TodoListTypes.TODO_LIST, payload: [{}] })
  })
})
