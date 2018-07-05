import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Modal, form, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import formHelper from './auth/form_helpers';
import * as actions from '../actions';
import { connect } from 'react-redux'

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
    open: false,
    email: '',
    password: '',
    confirmPassword: ''
  };


  handleChange= (e) => {
    console.log(e)
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
 }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentWillMount(){
	  this.setState({
		  open: this.props.open
	  })
  }
  submit=(e)=>{
	  e.preventDefault()
	  this.props.signupUser(this.state.email, this.state.password, this.state.confirmPassword)
    this.handleClose()
  }
  render() {
    const { classes } = this.props;

    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
             Sign Up
            </Typography>
            <formHelper />
				<form className={classes.container} noValidate autoComplete="off">
				<TextField
					type="email"
					name="email"
					label="Email"
					className={classes.textField}
					value={(this.state && this.state.email) ||  ''}
					onChange={this.handleChange}
					margin="normal"
				/>
				<TextField
					type='password'
					name="password"
					label="Password"
          value={(this.state && this.state.password) ||  ''}
          onChange={this.handleChange}
					className={classes.textField}

					margin="normal"
				/>
        <TextField
        type='password'
        name="confirmPassword"
        label="Verify Password"
        value={(this.state && this.state.confirmPassword) ||  ''}
        onChange={this.handleChange}
        className={classes.textField}
        margin="normal"
       />
				<Button
				color="primary"
                onClick= {this.submit}
				>Submit
				</Button>
			</form>
            <SignUpModalWrapped />
          </div>
        </Modal>
    );
  }
}

SignUpModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return state
}

// We need an intermediary variable for handling the recursive nesting.
const SignUpModalWrapped = withStyles(styles)(SignUpModal);

export default connect(mapStateToProps, actions)(SignUpModalWrapped);
