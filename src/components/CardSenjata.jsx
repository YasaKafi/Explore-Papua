
import React from 'react';
import imageAssets from '../app/utils/helpers';

const CardSenjata = () => {
  return (
    <div className="relative max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <img src={imageAssets.imgMPapeda} alt="kowakwo" className="w-full" />
      <div className="absolute bottom-5 left-5 bg-transparent text-5xl text-white p-2 opacity-80">
        Tifa
      </div>
    </div>
    
    

  );
};

export default CardSenjata;


