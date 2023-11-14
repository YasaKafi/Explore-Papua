import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAssets from "../utils/helpers";
import CardImg from "./CardImg";


const ImageSliderKuliner = (props) => {
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
              image={imageAssets.imgMPapeda}
              name="Papeda"
              description="Papeda adalah hidangan khas Papua yang terbuat dari pati sagu. Pati sagu diaduk dengan air hingga membentuk bubur kental. Hidangan ini biasanya disajikan sebagai pendamping berbagai lauk, seperti ikan atau daging, serta dicocolkan dalam kuah ikan atau sambal."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgMUlatSagu}
              name="Ulat Sagu"
              description="Ulat Sagu merupakan hidangan tradisional di Papua yang menggunakan ulat sagu sebagai bahan utama. Ulat tersebut dimasak dan disajikan sebagai hidangan yang kaya protein. Proses memasak biasanya melibatkan bumbu-bumbu tradisional yang memberikan rasa khas."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgMSinole}
              name="Sinole"
              description="Sinole adalah hidangan berbahan dasar ikan yang diawetkan dengan cara diasinkan. Ikan yang digunakan bisa beragam, dan proses pengasinan memberikan cita rasa khas. Sinole sering dimasak dengan berbagai bumbu dan saus untuk memberikan tambahan rasa yang lezat."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgMEurimoo}
              name="Anunu Sibere"
              description="Anunu Sibere adalah hidangan tradisional Papua yang menggunakan bahan dasar ikan atau daging yang diolah dengan berbagai bumbu dan rempah khas. Hidangan ini sering kali dimasak dengan cara digulai atau dipepes, memberikan rasa yang kaya dan gurih."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgMAnunuSenebre}
              name="Eurimoo"
              description="Eurimoo adalah hidangan khas Papua yang terbuat dari daun singkong yang dihaluskan dan dicampur dengan kelapa parut. Hidangan ini kemudian diolah dengan cara dikukus atau direbus. Eurimoo memiliki tekstur yang kenyal dan umumnya disajikan dengan santan kelapa."
            />
          </div>
          <div className="px-1">
            <CardImg
              image={imageAssets.imgMIkanBakarManokwari}
              name="Ikan Bakar Manokwari"
              description="Ikan Bakar Manokwari adalah hidangan ikan bakar khas dari Manokwari, Papua Barat. Ikan segar dibumbui dengan rempah-rempah dan bumbu tradisional Papua, kemudian dipanggang hingga matang. Hidangan ini biasanya disajikan dengan nasi atau papeda sebagai pendamping."
            />
          </div>
          
        </Slider>
      </div>
    );
  };

  export default ImageSliderKuliner;