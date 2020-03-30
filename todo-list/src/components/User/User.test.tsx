import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Utils
import { findByTestAttribute, storeFactory } from '../../test/testUtils'

// Component
import { User } from './User'

const setup = (initialState: any = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<User store={store} />)
  
  console.log('testing-----')
  console.log(wrapper)

  return wrapper
}



describe('Components > User', () => {
  const foo = setup()

  it('should ', () => {
    
  });
  // const user = shallow(<User />)

  // it('should render correctly', () => {
  //   expect(user).toMatchSnapshot()
  // })

  // describe('when typing into the user input', () => {
  //   const username = 'Dwight K. Schrute'

  //   beforeEach(() => {
  //     user.find('.user-input').simulate('change', { target: { value: username } })
  //   })
  // })
})
