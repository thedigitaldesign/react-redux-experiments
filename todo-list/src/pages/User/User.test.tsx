import React from 'react'

// Packages
import Enzyme, {shallow} from 'enzyme'

// Routes
import User from './User'

describe('Pages > User', () => {
  const user = shallow(<User />)

  it('should render pages User', () => {
    expect(user).toMatchSnapshot()
  });
});
