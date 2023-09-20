import React from 'react';
import imageAssets from '@/utils/helpers';

export default function CardWisata() {
  const backgroundImageUrl = imageAssets.imgWLorentzNationalPark;

  return (
    <div className="relative mx-auto my-8 h-52 w-2/6 rounded-xl overflow-hidden shadow-lg">
      <img src={backgroundImageUrl} alt="gunung" className=" relative -top-20  items-center object-cover" />
      <button className="absolute top-5 right-5 p-3 w-20 bg-black opacity-50 border-solid border-2 border-slate text-white text-xs rounded-full">
        Explore
      </button>

      <div className='bg-gradient-to-b from-black-300 to-black absolute bottom-0 left-0 right-0 h-full opacity-80'/>
      <h4 className="absolute bottom-1/4 mx-5 mb-4 text-lg text-white p-2 ">
      Lorentz National Park
      </h4>
      <p className='absolute text-xs text-white bottom-5 mx-5'>
        Lorentz National Park adalah taman nasional terbesar di Indonesia dan salah satu yang terbesar di dunia. Taman nasional ini terletak di Papua dan memiliki luas lebih dari 2,4 juta hektar.
      </p>

    </div>
    

  );
}