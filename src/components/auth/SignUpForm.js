import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Button } from 'material-ui/core/'
import { renderTextField } from './FormHelpers'
import {Modal, form, TextField} from 'material-ui/core';



class SignupForm extends Component {
  state = {
    open: false,
  };

  renderAlert() {

    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }

  handleChange = name => event => {
    console.log(event)
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const {handleSubmit} = this.props

    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={handleSubmit}>
          <TextField
  					type="email"
  					id="email"
  					label="Email"
  					value={this.state.name}
  					onChange={this.handleChange('name')}
  					margin="normal"
  				/>
          <TextField
  					type="password"
  					id="password"
  					label="Password"
  					margin="normal"
  				/>

          <TextField
  					type="password"
  					id="passwordConfirmation"
  					label="Confirm Password"
  					margin="normal"
  				/>

          <Button
            color="primary"
            onClick= {this.props.handleSubmit}
          >Submit
          </Button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  if (values.password !== values.passwordConfirmation) {
    errors.password = 'Passwords must match'
  }

  if (!values.email) {
    errors.email = 'Please enter an email'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Please confirm your password'
  }

  return errors
}


export default reduxForm({
  form: 'signup',
  validate
})(SignupForm)
