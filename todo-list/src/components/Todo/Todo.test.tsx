import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Component
import { Todo } from './Todo'

describe('Components > Todo', () => {
  const todo = shallow(<Todo />)

  it('should render correctly', () => {
    expect(Todo).toMatchSnapshot()
  })

  describe('when typing into the title input', () => {
    const title = 'Write more tests'

    beforeEach(() => {
      todo.find('.input-title').simulate('change', { target: { value: title } })
    })
  })

  describe('when typing into the description input', () => {
    const description = 'What more can I say?'

    beforeEach(() => {
      todo.find('.textarea-description').simulate('change', { target: { value: description } })
    })
  })
})
