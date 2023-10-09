import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";
import CardWisata from "./CardWisata";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SliderWisata = (props) => {
    const NextArrow = ({ onClick }) => {
        return (
          <div className="bg-white top-50 left-0" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="bg-white" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
  const { rtl } = props;
  const settings = {
    dots: true,
    rtl: rtl,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: 0,
    pauseOnHover: false,
    pauseOnFocus: false,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const yourDataArray = [
    {
      id: 1,
      title: "Lorentz National Park",
      imageUrl: imageAssets.imgWLorentzNationalPark,
      description:
        "Lorentz National Park adalah taman nasional terbesar di Indonesia dan salah satu yang terbesar di dunia. Taman nasional ini terletak di Papua dan memiliki luas lebih dari 2,4 juta hektar.",
    },
    {
      id: 2,
      title: "Lorentz National ",
      imageUrl: imageAssets.imgWAirTerjunKarmon,
      description:
        "Lorentz National Park adalah taman nasional terbesar di Indonesia dan salah satu yang terbesar di dunia. Taman nasional ini terletak di Papua dan memiliki luas lebih dari 2,4 juta hektar.",
    },
    {
      id: 3,
      title: "Lorentz ",
      imageUrl: imageAssets.imgWDanauSentani,
      description:
        "Lorentz National Park adalah taman nasional terbesar di Indonesia dan salah satu yang terbesar di dunia. Taman nasional ini terletak di Papua dan memiliki luas lebih dari 2,4 juta hektar.",
    },
    {
      id: 4,
      title: "Lorentz ",
      imageUrl: imageAssets.imgWNiagaraBihewa,
      description:
        "Lorentz National Park adalah taman nasional terbesar di Indonesia dan salah satu yang terbesar di dunia. Taman nasional ini terletak di Papua dan memiliki luas lebih dari 2,4 juta hektar.",
    },
    {
      id: 5,
      title: "Lorentz ",
      imageUrl: imageAssets.imgWPantaiHarlem,
      description:
        "Lorentz National Park adalah taman nasional terbesar di Indonesia dan salah satu yang terbesar di dunia. Taman nasional ini terletak di Papua dan memiliki luas lebih dari 2,4 juta hektar.",
    },
  ];

  const [autoplay, setAutoplay] = useState(true);

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div
      className="container mx-auto"
    >
      <Slider {...settings}>
        {yourDataArray.map((item, index) => (
          <div
            className={`relative px-2  mx-auto my-8 h-52 w-2/6 rounded-xl overflow-hidden shadow-lg transform ${
              index === imageIndex ? "scale-x-100 scale-y-90" : "scale-y-50 scale-x-50"
            } transition-transform duration-300 ease-in-out`}
          >
            <img
              src={item.imageUrl}
              alt="gunung"
              className=" relative -top-20  items-center object-cover"
            />
            <button className="absolute top-5 right-5 p-3 w-20 bg-black opacity-50 border-solid border-2 border-slate text-white text-xs rounded-full">
              Explore
            </button>

            <div className="bg-gradient-to-b from-black-300 to-black absolute bottom-0 left-0 right-0 h-full opacity-80" />
            <h4 className="absolute bottom-1/4 mx-5 mb-4 text-lg text-white p-2 ">
              {item.title}
            </h4>
            <p className="absolute text-xs text-white bottom-5 mx-5">
              {item.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderWisata;
