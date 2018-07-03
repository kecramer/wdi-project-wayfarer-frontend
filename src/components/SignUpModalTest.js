import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/core/styles';
import Typography from 'material-ui/core/Typography';
import {Modal, form, TextField} from 'material-ui/core';
import Button from 'material-ui/core/Button';
import SignUpForm from './auth/SignUpForm'

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  textField:{
	padding: theme.spacing.unit ,
  }
});

class SignUpModal extends React.Component {
  state = {
    name: ''
  }
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

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.handleClose()
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit({email, password, passwordConfirmation}) {
    this.props.signupUser({email, password, passwordConfirmation})
  }

  componentWillMount(){
	  this.setState({
		  open: this.props.open
	  })
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
    const { classes } = this.props;

    return (

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
             Sign Up
            </Typography>
            <SignUpForm onSubmit={this.handleSubmit.bind(this)} errorMessage={this.props.errorMessage}/>
            <SignUpModalWrapped />
          </div>
        </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {

    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
}

SignUpModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SignUpModalWrapped = withStyles(styles)(SignUpModal);

export default connect(mapStateToProps, actions)(SignUpModal);
