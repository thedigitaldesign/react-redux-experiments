import React, { Component } from 'react'

// Packages
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// Styles
import 'bulma'
import './App.css'

// Routes
import Routes from './utils/Routes/Routes'

// Store
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
