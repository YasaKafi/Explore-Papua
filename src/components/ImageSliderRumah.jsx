import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";
import CardImg from "./CardImg";


const ImageSliderRumah = (props) => {
    const { rtl } = props;
  
    const CustomPrevArrow = (props) => (
      <div {...props} className="slick-arrow slick-prev bg-black">
        <div className="arrow-left bg-black font-bold"></div>
      </div>
    );
  
    const CustomNextArrow = (props) => (
      <div {...props} className="slick-arrow slick-next bg-black">
        <div className="arrow-right"></div>
      </div>
    );
  
    const settings = {
      dots: true,
      rtl: rtl,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      pauseOnHover: false,
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="container  ">
        <Slider {...settings}>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgRHonai}
              name="Rumah Honai"
              description="Rumah tradisional suku Dani di Papua untuk laki-laki.   Rumah ini memiliki bentuk kerucut dengan atap jerami dan dinding dari anyaman daun. Tinggi rumahnya hanya mencapai 2,5 meter dan mampu menampung lima hingga sepuluh orang."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgREbei}
              name="Rumah Ebei"
              description="Memiliki bentuk yang sama dengan rumah Honai. Yang membedakannya adalah ditempati oleh para perempuan dewasa."
            />
          </div>
          
        </Slider>
      </div>
    );
  };

  export default ImageSliderRumah;