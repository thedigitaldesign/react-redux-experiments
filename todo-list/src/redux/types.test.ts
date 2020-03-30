import * as enz from 'enzyme'

// Dispatcher Types
import * as type from './types'

describe('Dispatch Types List', () => {
  it('should contain dispatch types for `TODO_ITEM`', () => {
    expect(type.TodoItemTypes).toMatchSnapshot()
  })

  it('should contain dispatch types for `TODO_LIST`', () => {
    expect(type.TodoListTypes).toMatchSnapshot()
  })

  it('should contain dispatch types for `USERNAME`', () => {
    expect(type.UsernameTypes).toMatchSnapshot()
  })
})
