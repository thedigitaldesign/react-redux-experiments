// Actions
import * as action from './action'

// Types
import * as type from '../types'

// Models
import { TodoListModel } from '../../models'

describe('Todo List Action', () => {
  const todoList: TodoListModel = {
    list: [
      {
        id: 1,
        title: 'Make more tests',
        description: 'More tests are needed',
      },
    ],
  }

  it('should return initial empty action with the `TODO_LIST`', () => {
    const getTodoList = action.GetTodoList()
    expect(getTodoList).toEqual({ type: type.TodoListTypes.TODO_LIST })
  })

  it('should return an action with the `TODO_LIST`', () => {
    const setTodoList = action.SetTodoList(todoList)
    expect(setTodoList).toEqual({ type: type.TodoListTypes.TODO_LIST, payload: todoList })
  })
})
