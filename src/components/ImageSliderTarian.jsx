import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";
import CardImg from "./CardImg";


const ImageSliderTarian = (props) => {
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
              image={imageAssets.imgTTariSajojo}
              name="Tari Sajojo"
              description="Tarian daerah yang populer di Papua, sering ditampilkan dalam berbagai acara hiburan, adat, maupun budaya. Dengan diiringi lagu daerah Papua berjudul Sajojo, tarian ini didominasi oleh gerakan kaki yang enerjik dan ceria. Lagu Sajojo sendiri merupakan lagu daerah Papua yang menceritakan tentang seorang gadis yang dicintai dan diidolakan di kampungnya."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgTTariYospan}
              name="Tari Yospan"
              description="Tarian budaya Papua yang sering dibawakan oleh pemuda dan pemudi sebagai bentuk persaudaraan dan persahabatan. Ketika menari, posisi para penari akan membentuk lingkaran. Para penari tersebut berjalan berkeliling sambil terus menari dengan dinamika, penuh semangat, dan energik.
              Kostum yang digunakan dalam pertunjukan tari Yospan, terbuat dari akar atau daun. Kostum ini juga dilengkapi dengan berbagai aksesoris seperti penutup kepala, lukisan tubuh, dan lainnya."
            />
          </div>
          <div className="px-1">
          <CardImg
              image={imageAssets.imgTTariAluyen}
              name="Tari Suanggi"
              description="Tari khas Papua yang berasal dari daerah pantai Teluk Cendrawasih, Waropen, Papua Barat. Tarian ini digunakan untuk mengusir roh jahat. Sebelum memulai tarian, para penari harus melakukan ritual yang dipimpin kepala suku terlebih dahulu."
            />
          </div>
          
        </Slider>
      </div>
    );
  };

  export default ImageSliderTarian;