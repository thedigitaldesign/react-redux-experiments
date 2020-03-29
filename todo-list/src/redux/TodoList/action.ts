// Models
import { Todo } from '../../models/Todo'

// Types
import * as type from '../types'

export const AddTodoItem = (item: Todo) => {
  return {
    type: type.TodoItemTypes.TODO_ITEM,
    payload: item,
  }
}

export const GetTodoList = () => {
  return {
    type: type.TodoListTypes.TODO_LIST,
    payload: [{}],
  }
}
