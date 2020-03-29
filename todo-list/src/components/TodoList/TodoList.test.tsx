import React from 'react'

// Packages
import Enzyme, { shallow } from 'enzyme'

// Routes
import { TodoList } from './TodoList'

describe('Components > TodoList', () => {
  const todoList = shallow(<TodoList />)

  it('should render components TodoList', () => {
    expect(todoList).toMatchSnapshot()
  })
})
