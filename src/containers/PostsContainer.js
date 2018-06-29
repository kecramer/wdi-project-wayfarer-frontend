import React, { Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Posts from '../components/Posts'

export default class PostsContainer extends Component {
  render(){
    return(
      <Grid item md={8}>
        <Posts/>
      </Grid>
    )
  }

}
