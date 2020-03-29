import React from 'react'

// Packages
import Enzyme, { shallow } from 'enzyme'

// Component
import { User } from './User'

describe('User', () => {
  const user = shallow(<User />)

  it('should render correctly', () => {
    expect(user).toMatchSnapshot()
  })

  describe('when typing into the user input', () => {
    const username = 'hello_world'

    beforeEach(() => {
      user.find('.user-input').simulate('change', { target: { value: username } })
    })
  })
})
