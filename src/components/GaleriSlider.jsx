import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";

const GaleriSlider = (props) => {
  const { rtl } = props;
  const settings = {
    dots: true,
    rtl: rtl,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container  mx-auto">
      <Slider {...settings}>
        <div className="px-1">
          <img
            src={imageAssets.imgMEurimoo}
            alt="Image 1"
            className=" w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgWAirTerjunKarmon}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgTTariSajojo}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgTrRitualKematian}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgSKapak}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgPYokai}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgMAnunuSenebre}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgRHonai}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
        <div className="px-1">
          <img
            src={imageAssets.imgPKotekai}
            alt="Image 1"
            className="w-44 h-24 object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default GaleriSlider;
