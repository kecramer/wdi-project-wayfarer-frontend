import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/core/styles';
import Typography from 'material-ui/core/Typography';
import {Modal, form, TextField} from 'material-ui/core';
import RaisedButton from 'material-ui/core/RaisedButton';

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

class SimpleModal extends React.Component {
  state = {
    open: false,
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.handleClose()
    this.setState({ open: false });
  };
  componentWillMount(){
	  this.setState({
		  open: this.props.open
	  })
  }
  submit=(e)=>{
	  e.preventDefault()
	  console.log(e)
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
             Login
            </Typography>
				<form className={classes.container} noValidate autoComplete="off">
				<TextField
					type="email"
					id="email"
					label="Email"
					className={classes.textField}
					value={this.state.name}
					onChange={this.handleChange('name')}
					margin="normal"
				/>
				<TextField
					type='password'
					id="password"
					label="Password"
					className={classes.textField}
					margin="normal"
				/>
				<RaisedButton
  				color="primary"
          onClick= {this.submit}
				>Submit
      </RaisedButton>
			</form>
            <SimpleModalWrapped />
          </div>
        </Modal>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
