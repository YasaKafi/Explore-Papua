import React from 'react'
import imageAssets from '../utils/helpers'

export default function CardAspek() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 border-box">
      <div className="flex justify-center items-center border-box">
        <div className="bg-black shadow-md rounded-lg p-8 relative border-box">
          <div className="w-24 h-24 bg-blue-500 rounded-full absolute z-2 -top-11 -left10 ">
            <img className="w-24 h-24  rounded-full object-cover" src={imageAssets.imgFranskaisepo} alt="Workflow" />
          </div>
          <h2 className="text-xl text-center relative -top-5 font-semibold ">Card Section</h2>
          <p className='font-poppins'>This is a sample card section with a circular container.</p>
          <div className="bg-white">
          
        </div>
        </div>
      </div>
    </div>
  )
}
