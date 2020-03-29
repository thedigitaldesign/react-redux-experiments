import React, { Component } from 'react'

// Packages
import { Route } from 'react-router-dom'

// Pages
import Todo from '../../pages/Todo/Todo'
import User from '../../pages/User/User'

export default class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={User} />
        <Route path="/todo" exact component={Todo} />
      </>
    )
  }
}
