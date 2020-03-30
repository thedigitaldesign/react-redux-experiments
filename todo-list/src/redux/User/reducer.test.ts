// Model
import { UserModel } from '../../models'

// Types
import * as type from '../types'

// Reducer
import UserReducer from './reducer'

describe('User Reducer', () => {
  const username: UserModel = { username: 'Michael Scott' }

  it('should return initial state', () => {
    const newState = UserReducer(null, {
      type: type.UsernameTypes.USERNAME,
      payload: '',
    })
    expect(newState).toEqual('')
  })

  it('should return `USERNAME`', () => {
    const newState = UserReducer(null, {
      type: type.UsernameTypes.USERNAME,
      payload: username.username,
    })
    expect(newState).toEqual(username.username)
  })
})
