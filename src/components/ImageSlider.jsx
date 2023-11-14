import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";
import CardImg from "./CardImg";

const ImageSliderTradisi = (props) => {
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
            image={imageAssets.imgTrUpacaraBakarBatu}
            name="Upacara Bakar Batu"
            description="Ritual kuliner tradisional di Papua. Masyarakat mengumpulkan batu-batu panas dan meletakkannya di dalam lubang yang diisi dengan makanan, seperti babi atau ubi. Makanan akan matang melalui proses memasak oleh batu-batu panas tersebut."
          />
        </div>
        <div className="px-1">
          <CardImg
            image={imageAssets.imgTrTradisiWor}
            name="Upacara Wor"
            description="Upacara adat suku Korowai di Papua saat membangun rumah baru di pohon. Rumah pohon digunakan sebagai bentuk perlindungan dari binatang buas dan banjir. Tradisi Wor melibatkan komunitas dalam membangun rumah pohon secara gotong-royong."
          />
        </div>
        <div className="px-1">
        <CardImg
            image={imageAssets.imgTrRitualKematian}
            name="Upacara Kematian Suku Asmat"
            description="Ritual kematian suku Asmat melibatkan tradisi penguburan yang kompleks dan spiritual. Mayat dihiasi dengan ukiran dan dianggap memiliki hubungan dengan dunia roh. Penguburan melibatkan tarian, nyanyian, dan upacara yang melibatkan masyarakat."
          />
        </div>
        
      </Slider>
    </div>
  );
};

export default ImageSliderTradisi;






