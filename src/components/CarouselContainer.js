import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class CarouselContainer extends Component {
    render() {
        return (
          <div className="carouselContainer"
            m={6}
            >

            <Carousel
              showArrows={true}
              showThumbs={false}
              width={'100%'}
              centerMode={true}
              autoPlay={true}
              className="carousel">
              <div>
                <img src="images/cablecar.jpg" />
              </div>
              <div>
                <img src="images/cablecar.jpg" />

              </div>
              <div>
                <img src="images/cablecar.jpg" />

              </div>
            </Carousel>
          </div>
        );
    }
}
export default CarouselContainer
