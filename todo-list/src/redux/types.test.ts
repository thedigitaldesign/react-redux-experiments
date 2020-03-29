import * as enz from 'enzyme'

// Dispatcher Types
import * as type from './types'

describe('Dispatch Types List', () => {
  it('should contain dispatch types for `Todo`', () => {
    expect(type.Todo).toMatchSnapshot()
  });
});
