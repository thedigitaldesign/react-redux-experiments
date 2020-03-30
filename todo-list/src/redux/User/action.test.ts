// Actions
import * as action from './action'

// Types
import * as type from '../types'

// Models
import { UserModel } from '../../models'

describe('User Action', () => {
  const username: UserModel = { username: 'Michael Scott' }

  it('should return username action with `USERNAME`', () => {
    const getUsername = action.GetUsername()
    expect(getUsername).toEqual({ type: type.UsernameTypes.USERNAME })
  })

  it('should set username action with `USERNAME`', () => {
    const setUsername = action.SetUsername(username)
    expect(setUsername).toEqual({ type: type.UsernameTypes.USERNAME, payload: username })
  })
})
