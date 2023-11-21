import React from 'react'
import ImageSlider from './ImageSlider'
import GaleriSlider from './GaleriSlider';
import GaleriSlider2 from './GaleriSlider2';
import GaleriSlider3 from './GaleriSlider3';

const rtl = true;

const GalleryPapua = () => {

  
  return (
    <div className="mt-10 mx-10">
      <h1 className="text-center text-3xl font-poppins font-semibold mb-5">Galeri Papua</h1>
            <GaleriSlider/>
            <GaleriSlider2 rtl={true}/>
            <GaleriSlider3/>
    </div>
  )
}

export default GalleryPapua