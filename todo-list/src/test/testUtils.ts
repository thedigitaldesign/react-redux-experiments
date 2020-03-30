// Packages
import { createStore } from 'redux'
// import checkPropTypes from 'check-prop-types'

// Redux
import { RootReducer } from '../redux/root'

export const storeFactory = (initialState: any) => {
  return createStore(RootReducer, initialState)
}

export const findByTestAttribute = (wrapper: any, value: any) => {
  return wrapper.find(`[data-test="${value}"]`)
}

// export const checkProps = (component: any, conformingProps: any) => {
//   const propError = checkPropTypes(
//     component.propTypes,
//     conformingProps,
//     'prop',
//     component.name
//   )
//   expect(propError).toBeUndefined()
// }
