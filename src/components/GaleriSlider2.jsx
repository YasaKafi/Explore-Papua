import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from '../utils/helpers';


const GaleriSlider2 = (props) => {
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
          <img
            src={imageAssets.imgMIkanBakarManokwari}
            alt="Image 1"
            className=" w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgWKekayaanLaut1}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgTTariAluyen}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgTrTradisiWor}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgSPanah}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgATifa}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgMPapeda}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgMSinole}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgMUlatSagu}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default GaleriSlider2;