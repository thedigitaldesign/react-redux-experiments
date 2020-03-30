// Models
import { TodoModel } from '../../models/TodoModel'

// Types
import * as type from '../types'

export const AddTodoItem = (item: TodoModel) => {
  return {
    type: type.TodoItemTypes.TODO_ITEM,
    payload: item,
  }
}
