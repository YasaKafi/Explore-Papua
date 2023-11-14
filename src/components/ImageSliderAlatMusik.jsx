import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";
import CardImg from "./CardImg";


const ImageSliderAlatMusik = (props) => {
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
      slidesToShow: 3,
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
            slidesToShow: 3,
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
              image={imageAssets.imgAFuu}
              name="Fuu"
              description="Fuu memiliki bentuk seperti terompet dan terbuat dari bahan-bahan alami seperti bambu atau tanduk hewan. Alat musik ini dimainkan dengan cara meniup udara ke dalamnya, menghasilkan suara yang khas dan unik. Fuu sering digunakan dalam berbagai upacara adat dan pertunjukan seni tradisional di Papua."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgAGouto}
              name="Gouto"
              description="Pakaian ini khusus dikenakan oleh suku-suku pribumi di Papua, seperti suku Dani dan suku Asmat. Koteka biasanya terbuat dari bahan alam seperti kulit kayu, daun, atau serat tumbuhan. Pakaian ini menutupi bagian depan tubuh dan diikat di bagian pinggang. Ukurannya bervariasi dan memiliki bentuk yang khas, sering kali terlihat seperti tabung atau cangkir terbalik."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgATifa}
              name="Tifa"
              description="Tifa adalah jenis drum tradisional yang digunakan oleh suku-suku di Papua. Alat musik ini terbuat dari kayu yang diukir dengan indah dan memiliki membran yang terbuat dari kulit hewan di kedua sisinya. Tifa dimainkan dengan cara memukul membran menggunakan tangan atau pemukul khusus."
            />
          </div>
          
        </Slider>
      </div>
    );
  };

  export default ImageSliderAlatMusik;