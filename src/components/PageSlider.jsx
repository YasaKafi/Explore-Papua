import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imageAssets from '@/utils/helpers';

const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src={imageAssets.imgWDanauSentani} alt="Image 1" />
      </div>
      <div>
        <img src={imageAssets.imgWRajaAmpat1} alt="Image 2" />
      </div>
      <div>
        <img src={imageAssets.imgWLorentzNationalPark} alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
