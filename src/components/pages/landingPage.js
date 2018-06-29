import React, { Component} from 'react'
import CarouselContainer from '../CarouselContainer'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import PromoText from '../PromoText'
import Grid from '@material-ui/core/Grid'
class LandingPage extends Component {




  render() {
    const classNames = {
      paddingTop: '5em',
      paddingBottom: '5em'
    }
    const { classes } = this.props;

    return (
      <div className="LandingPage">
        <div className="carousel">
          <CarouselContainer
            style={styles}/>
        </div>
        <div className="articleContainer">
          I am a landing page component. Hello.
          <Grid container
            spacing={24}
            alignItems={'center'}
            direction={'row'}
            justify-content={'space-around'}>
            <PromoText/>
            <PromoText/>
            <PromoText/>
          </Grid>
          <div>

          </div>

        </div>

      </div>
    )
  }
}

export default LandingPage
