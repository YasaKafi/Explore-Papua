import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from '../utils/helpers';


const GaleriSlider3 = (props) => {
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
            src={imageAssets.imgMKueSaguBagea}
            alt="Image 1"
            className=" w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgWLorentzNationalPark}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgTTariYospan}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgTrUpacaraBakarBatu}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgSPisauBelati}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgWPuncakJaya}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgWRajaAmpat2}
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
            src={imageAssets.imgWNiagaraBihewa}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default GaleriSlider3;