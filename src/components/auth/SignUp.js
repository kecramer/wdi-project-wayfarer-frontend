import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import * as actions from '../../actions'
import { Redirect } from 'react-router-dom'


class Signup extends Component {

  componentWillUnmount() {
    if (this.props.errorMessage) {
      this.props.authError(null)
    }
  }

  handleSubmit({email, password, passwordConfirmation}) {
    this.props.signupUser({email, password, passwordConfirmation})
  }

  getRedirectPath() {
    const locationState = this.props.location.state
    if (locationState && locationState.from.pathname) {
      return locationState.from.pathname
    } else {
      return '/'
    }
  }

  render() {
    return (this.props.authenticated) ?
      <Redirect to={{
        pathname: this.getRedirectPath(), state: {
          from: this.props.location
        }
      }}/>
      :
      <div>
        <SignUpForm onSubmit={this.handleSubmit.bind(this)} errorMessage={this.props.errorMessage}/>
      </div>
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password, passwordConfirmation) => dispatch(actions.signupUser(email, password, passwordConfirmation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
