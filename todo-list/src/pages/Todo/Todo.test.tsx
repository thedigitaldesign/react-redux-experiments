import React from 'react'

// Packages
import Enzyme, {shallow} from 'enzyme'

// Routes
import Todo from './Todo'

describe('Pages > Todo', () => {
  const todo = shallow(<Todo />)

  it('should render pages Todo', () => {
    expect(todo).toMatchSnapshot()
  });
});
