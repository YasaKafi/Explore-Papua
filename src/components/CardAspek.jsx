import React from 'react'
import imageAssets from '../utils/helpers'

export default function CardAspek({title, desc}) {
  return (
  
    <div className="col-span-1 bg-[#414141] shadow-md rounded-lg p-8 relative border-box w-[350px] md:w-96 h-84 md:h-80">
      <div className='flex'>
      <div className="w-24 h-24 bg-white shadow-xl rounded-full  absolute -top-6  ">
        {/* <img className="w-24 h-24 rounded-full object-cover " src={imageAssets.imgFranskaisepo} alt="Workflow" /> */}
      </div>
      <h2 className="text-lg relative font-bold left-28 -top-4 overflow-ellipsis "> {title}</h2>
      <div className='w-40'/>
      </div>
      
      <p className=" text-sm font-poppins ">{desc}</p>
    </div>
  
  )
}
