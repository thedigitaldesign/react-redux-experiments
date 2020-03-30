import React, { Component } from 'react'

interface Props {
  store?: any
}

export class User extends Component<Props> {
  render() {
    return (
      <div {...this.props}>
        <div className="field">
          <label className="label">Username or Todo List name</label>
          <div className="control">
            <input type="text" className="input user-input" placeholder="Team_Voldemort" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link is-pulled-right">
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  }
}
