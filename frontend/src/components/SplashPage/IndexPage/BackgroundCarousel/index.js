import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import first from '../../../../assets/images/saharah_background.png';
import second from '../../../../assets/images/saharah_background_2.png';
import third from '../../../../assets/images/saharah_background_3.png';

// Boilerplate css  - need to get other pieces implemented
import "bootstrap/dist/css/bootstrap.min.css";

function BackgroundCarousel() {
   return (
      <Carousel>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={first}
               alt=''
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={second}
               alt=''
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={third}
               alt=''
            />
         </Carousel.Item>
      </Carousel>
   )
}

export default BackgroundCarousel;