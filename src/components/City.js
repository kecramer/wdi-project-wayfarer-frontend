
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function City(props) {
  const { classes } = props;

  return (
      <Grid item md={11}
        justify-content={'center'}>
        <Paper className={classes.root} elevation={12}>
          <Typography variant="headline" component="h3">
            This is a City. Hello.
          </Typography>
          <Typography component="p">
          San Francisco
          </Typography>
        </Paper>
      </Grid>

  );
}

City.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(City);
