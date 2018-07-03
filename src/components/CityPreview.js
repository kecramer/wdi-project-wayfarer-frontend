import React, { Component, Fragment } from 'react'
import {CardMedia, Grid, Card} from 'material-ui/core'


export default class CityPreview extends Component {
  render(){
    return (
      <Fragment>
      <Grid container
        justifyContent={'space-around'}
        spacing={24}
        alignItems={'center'}
      >
        <Grid item md={6}>
          <h1> City Name </h1>
          <h3> Country Name </h3>
        </Grid>
        <Grid item md={6}>
          <img style={{maxWidth: '100%',maxHeight:'5.5em' }}src='images/sfFun.jpg'/>
        </Grid>
      </Grid>
      </Fragment>
    )
  }
}
