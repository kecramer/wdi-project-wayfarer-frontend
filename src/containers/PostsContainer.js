import React, { Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Posts from '../components/Posts'
import CityPreview from '../components/CityPreview'
import Fab from '../components/Fab'

export default class PostsContainer extends Component {
  render(){
    return(
      <Grid item md={8}>
        <CityPreview />
        <Grid item md={2}>
          <Fab />
        </Grid>
        <Grid container
          direction={'column'}
          justifyContent={'space-around'}
          spacing={24}
          style={{paddingTop: '2.5em'}}>

          <Posts/>
        </Grid>
      </Grid>
    )
  }

}
