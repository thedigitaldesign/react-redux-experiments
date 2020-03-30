// Types
import * as type from '../types'

// Models
import { TodoListModel } from '../../models'

export const GetTodoList = () => {
  return {
    type: type.TodoListTypes.TODO_LIST,
  }
}

export const SetTodoList = (list: TodoListModel) => {
  return {
    type: type.TodoListTypes.TODO_LIST,
    payload: list,
  }
}
