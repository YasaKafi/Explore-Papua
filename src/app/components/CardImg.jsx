import React from 'react';
import imageAssets from '../utils/helpers';

const CardImg = () => {
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <img src={imageAssets.imgMKueSaguBagea} alt="awkokawo" className="w-full" />
      <div className="bg-white p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-600 font-poppinsfont-poppins">Adat Istiadat </h2>
      </div>
    </div>
  );
};

export default CardImg;
