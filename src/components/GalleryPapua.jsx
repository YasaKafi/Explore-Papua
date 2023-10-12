import React from 'react'
import ImageSlider from './ImageSlider'

const rtl = true;

const GalleryPapua = () => {

   

  return (
    <div className="mt-10 mx-10">
            <ImageSlider/>
            <ImageSlider rtl={true}/>
            <ImageSlider/>
    </div>
  )
}

export default GalleryPapua