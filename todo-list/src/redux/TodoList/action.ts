// Types
import * as type from '../types'

export const GetTodoList = () => {
  return {
    type: type.TodoListTypes.TODO_LIST,
    payload: [{}],
  }
}
