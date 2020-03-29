import React, { Component } from 'react'

export class Todo extends Component {
  render() {
    return (
      <>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input type="text" className="input input-title" placeholder="Todo task" />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea textarea-description" placeholder="Todo description"></textarea>
          </div>
        </div>
      </>
    )
  }
}
