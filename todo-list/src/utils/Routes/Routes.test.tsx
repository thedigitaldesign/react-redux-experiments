import React from 'react'

// Packages
import Enzyme, {shallow} from 'enzyme'

// Routes
import Routes from './Routes'

describe('Routes', () => {
  const routes = shallow(<Routes />)

  it('should render routes', () => {
    expect(routes).toMatchSnapshot()
  });
});
