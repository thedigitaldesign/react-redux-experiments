// Models
import { UserModel } from '../../models'

// Types
import * as type from '../types'

export default (state: any, action: { type: string; payload: UserModel | string }) => {
  switch(action.type) {
    case type.UsernameTypes.USERNAME:
      return action.payload
    default:
      return state || null
  }
}
