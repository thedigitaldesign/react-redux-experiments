// Models
import { TodoListModel } from '../../models'

// Types
import * as type from '../types'

export default (state: any, action: { type: string; payload: TodoListModel | null }) => {
  switch (action.type) {
    case type.TodoListTypes.TODO_LIST:
      return action.payload?.list
    default:
      return state || null
  }
}
