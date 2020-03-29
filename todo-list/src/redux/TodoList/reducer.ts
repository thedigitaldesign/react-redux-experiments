// Models
import { Todo } from '../../models'

// Types
import * as type from '../types'

export default (state: any, action: { type: string; payload: Todo[] | null }) => {
  switch (action.type) {
    case type.TodoListTypes.TODO_LIST:
      return action.payload
    default:
      return state || null
  }
}
