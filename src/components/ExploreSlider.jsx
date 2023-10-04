import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from '../utils/helpers';


const ExploreSlider = (props) => {
  const { rtl } = props;
  const settings = {
    dots: true,
    rtl: rtl,
    infinite: true,
    speed: 1000,
    slidesToShow:3,
    autoplay: true, 
    autoplaySpeed: 2000,
    arrows : true,
    pauseOnHover: true,
    margin : 20,
    responsive: [
      {
        breakpoint: 1024,
        settings :{
          slidesToShow : 1,
        },
      },
    ]
  };

  return (
    <div className="flex-col md:flex md:flex-col lg:flex-row xl:items-center  flex items-center ">
    <div className="bg-primary items-center w-64 h-35 py-5 lg:py-20 mb-3   rounded-xl">
        <h1 className="text-center text-xl font-poppins">ADA APA DI</h1>
        <h1 className="font-semibold text-center text-2xl font-poppins">PAPUA?</h1>
      </div>
    <div className="container  mx-auto w-8/12 md:w-5/12  lg:-ml-0.5 sm:w-4/12 ">
      <Slider {...settings}>
      <div className="px-3">
        <img className ="rounded-t-lg " src={imageAssets.imgMUlatSagu} alt="" />
        <h1 className="bg-white text-black text-center font-poppins font-medium h-8 py-1 rounded-b-lg">Adat istiadat</h1>
      </div>
      <div className="px-3">
        <img className ="rounded-t-lg" src={imageAssets.imgMUlatSagu} alt="" />
        <h1 className="bg-white text-black text-center font-poppins font-medium h-8 py-1 rounded-b-lg">Adat istiadat</h1>
      </div>
      <div className="px-3">
        <img className ="rounded-t-lg" src={imageAssets.imgMUlatSagu} alt="" />
        <h1 className="bg-white text-black text-center font-poppins font-medium h-8 py-1 rounded-b-lg">Adat istiadat</h1>
      </div>
      <div className="px-3">
        <img className ="rounded-t-lg" src={imageAssets.imgMUlatSagu} alt="" />
        <h1 className="bg-white text-black text-center font-poppins font-medium h-8 py-1 rounded-b-lg">Adat istiadat</h1>
      </div>
      <div className="px-3">
        <img className ="rounded-t-lg" src={imageAssets.imgMUlatSagu} alt="" />
        <h1 className="bg-white text-black text-center font-poppins font-medium h-8 py-1 rounded-b-lg">Adat istiadat</h1>
      </div>
      <div className="px-3">
        <img className ="rounded-t-lg" src={imageAssets.imgMUlatSagu} alt="" />
        <h1 className="bg-white text-black text-center font-poppins font-medium h-8 py-1 rounded-b-lg">Adat istiadat</h1>
      </div>
      <div className="px-3">
        <img className ="rounded-t-lg" src={imageAssets.imgMUlatSagu} alt="" />
        <h1 className="bg-white text-black text-center font-poppins font-medium h-8 py-1 rounded-b-lg">Adat istiadat</h1>
      </div>
      
      </Slider>
    </div>
    </div>
  );
};

export default ExploreSlider;
