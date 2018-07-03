import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/core/styles';
import AppBar from 'material-ui/core/AppBar';
import Tabs from 'material-ui/core/Tabs';
import Tab from 'material-ui/core/Tab';
import Typography from 'material-ui/core/Typography';
import Zoom from 'material-ui/core/Zoom';
import Button from 'material-ui/core/Button';
import AddIcon from 'material-ui/icons/Add';
import EditIcon from 'material-ui/icons/ModeEdit';
import UpIcon from 'material-ui/icons/KeyboardArrowUp';
import green from 'material-ui/core/colors/green';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    right: theme.spacing.unit * 5,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

class Fab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fab = {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
      }

    return (
        <Button variant="fab" className={fab.className} color={fab.color}>
          <AddIcon />
        </Button>
    );
  }
}

Fab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Fab);
