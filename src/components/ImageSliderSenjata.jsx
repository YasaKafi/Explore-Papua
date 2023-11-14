import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";
import CardImg from "./CardImg";


const ImageSliderSenjata = (props) => {
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
              image={imageAssets.imgSKapak}
              name="Kapak"
              description="Kapak adalah senjata tradisional dari Papua Barat ini merupakan ikon wilayah Irian Jaya. Kapak ini biasanya terbuat dari kayu atau batu dan memiliki bentuk yang khas. Digunakan untuk berbagai keperluan, termasuk."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgSPanah}
              name="Panah"
              description="Senjata tradisional berbentuk panah yang digunakan untuk berburu dan bertahan dalam pertempuran. Mereka terbuat dari kayu dan dihiasi dengan detail-detail ukiran atau dekorasi lainnya. Panah ini merupakan bagian penting dari kehidupan sehari-hari suku-suku di Papua."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgSPisauBelati}
              name="Pisau Belati"
              description="Senjata tajam yang digunakan oleh suku-suku di Papua. Pisau ini memiliki bentuk yang unik dan terbuat dari bahan-bahan alami seperti batu atau tulang. Selain digunakan dalam kegiatan berburu, pisau belati juga memiliki makna simbolis dalam budaya lokal."
            />
          </div>
          
        </Slider>
      </div>
    );
  };

  export default ImageSliderSenjata;