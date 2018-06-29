import React, { Component} from 'react'
import CarouselContainer from '../CarouselContainer'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import PromoText from '../PromoText'
import Grid from '@material-ui/core/Grid'
import CitiesContainer from '../../containers/CitiesContainer'
import PostsContainer from '../../containers/PostsContainer'

class CityPage extends Component {
  render() {
    return(
      <Grid container
        spacing={24}
        alignItems={'space-around'}
        direction={'column'}
        justify-content={'space-around'}>

        <CitiesContainer/>


        <PostsContainer/>
      </Grid>





    )

  }

}
export default CityPage
