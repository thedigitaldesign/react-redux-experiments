// Types
import * as type from '../types'

// Models
import { UserModel } from '../../models'

export const GetUsername = () => {
  return {
    type: type.UsernameTypes.USERNAME
  }
}

export const SetUsername = (username: UserModel) => {
  return {
    type: type.UsernameTypes.USERNAME,
    payload: username
  }
}