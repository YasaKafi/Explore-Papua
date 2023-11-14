import React from 'react'
import ImageSlider from './ImageSlider'

const rtl = true;

const GalleryPapua = () => {

   

  return (
    <div className="mt-10 mx-10">
      <h1 className="text-center text-3xl font-poppins font-semibold mb-5">Galeri Papua</h1>
            <ImageSlider/>
            <ImageSlider rtl={true}/>
            <ImageSlider/>
    </div>
  )
}

export default GalleryPapua