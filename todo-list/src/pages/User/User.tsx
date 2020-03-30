import React, { Component } from 'react'

// Packages
import { connect } from 'react-redux'

// Components
import { User as UserComponent } from '../../components'

class User extends Component {
  render() {
    return (
      <>
        <UserComponent store={this.props} />
      </>
    )
  }
}

const mapStateToProps = (state: any) => {

}

const mapDispatchToProps = (dispatch: any) => {
  return
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
