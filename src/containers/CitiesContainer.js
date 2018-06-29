import React, { Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Cities from '../components/Cities'

export default class CitiesContainer extends Component {
  render(){
    return(
      <Grid item md={4}>
        <Grid container
          direction={'column'}
          justify-content={'space-around'}
          spacing={24}>

          <Cities/>
        </Grid>
      </Grid>
    )
  }

}
