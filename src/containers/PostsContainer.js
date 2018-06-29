import React, { Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Posts from '../components/Posts'
import CityPreview from '../components/CityPreview'

export default class PostsContainer extends Component {
  render(){
    return(
      <Grid item md={8}>
        <CityPreview />
        <Posts/>
      </Grid>
    )
  }

}
