import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from '../utils/helpers';


const ImageSlider = (props) => {
  const { rtl } = props;
  const settings = {
    dots: true,
    rtl: rtl,
    infinite: true,
    speed: 1000,
    slidesToShow:7,
    autoplay: true, 
    autoplaySpeed: 5000,
    arrows : false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings :{
          slidesToShow : 5,
        },
      },
      {
        breakpoint: 768,
        settings :{
          slidesToShow : 3,
        },
      },
    ]
  };

  return (
    
    <div className="container  mx-auto">
      <Slider {...settings}>
      <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
        <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
        <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
        <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
        <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
        <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
        <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
        <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
        <div className="px-1">
          <img src={imageAssets.imgMEurimoo} alt="Image 1" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
