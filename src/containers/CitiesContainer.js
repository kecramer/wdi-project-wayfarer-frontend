import React, { Component} from 'react'
import Grid from 'material-ui/core/Grid'
import Cities from '../components/Cities'

export default class CitiesContainer extends Component {
  render(){
    return(
      <Grid item md={4}>
        <Grid container
          direction={'column'}
          justifyContent={'space-around'}
          spacing={24}
          alignItems={'center'}
          style={{paddingTop: '2.5em'}}>
          <Cities/>
        </Grid>
      </Grid>
    )
  }

}
