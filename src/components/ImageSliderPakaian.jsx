import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";
import CardImg from "./CardImg";


const ImageSliderPakaian = (props) => {
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
              image={imageAssets.imgPYokai}
              name="Pakaian Yokai"
              description="Pakaian tradisional  untuk menutupi tubuh wanita bagian atas dan hanya boleh dikenakan oleh mereka yang sudah menikah. Pakaian Yokal terbuat dari kulit pohon yang berwarna mencolok coklat tanah atau kemerahan. Pakaian ini dibuat dengan cara dianyam dan dililitkan memutari tubuh wanita."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgPKotekai}
              name="Pakaian Kotekai"
              description="Pakaian ini khusus dikenakan oleh suku-suku pribumi di Papua, seperti suku Dani dan suku Asmat. Koteka biasanya terbuat dari bahan alam seperti kulit kayu, daun, atau serat tumbuhan. Pakaian ini menutupi bagian depan tubuh dan diikat di bagian pinggang. Ukurannya bervariasi dan memiliki bentuk yang khas, sering kali terlihat seperti tabung atau cangkir terbalik."
            />
          </div>
          
        </Slider>
      </div>
    );
  };

  export default ImageSliderPakaian;