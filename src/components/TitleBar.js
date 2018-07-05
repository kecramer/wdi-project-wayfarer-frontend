import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LogInModal from './LoginModal';
import SignUpModal from './SignUpModal';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends Component {
  constructor() {
    super()
    this.state = {
      anchorEl: null,
      loginFormShow: false,
      signUpFormShow: false
    }
  }
  showLogin = (e) =>{
    e.preventDefault()
    let taco = !this.state.loginFormShow
    this.setState({
      loginFormShow: taco
    })
  }

  showSignUp = (e) =>{
    e.preventDefault()
    let taco = !this.state.signUpFormShow
    this.setState({
      signUpFormShow: taco
    })
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, signUpFormShow: false, loginFormShow: false });
  }
  componentWillUpdate(){
    true
  }
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
      {this.state.loginFormShow && <LogInModal open={this.state.loginFormShow} />}
      {this.state.signUpFormShow && <SignUpModal open={this.state.signUpFormShow}/>}
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}/>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Wayfarer
              </Typography>
              <Button
                onClick= {this.showLogin}
                color="inherit">Login</Button>
              <Button
                onClick= {this.showSignUp}
                color="inherit">SignUp</Button>
            </Toolbar>
          </AppBar>
        </div>
      );

  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
