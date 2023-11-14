import imageAssets from '@/utils/helpers';
import React from 'react';

const Menu = () => {
    const products = [
        {
            imageUrl: imageAssets.imgWPantaiHarlem,
            title: 'Adat Istiadat',
        },
        {
            imageUrl: imageAssets.imgWPantaiHarlem,
            title: 'Adat Istiadat',
        },
        {
            imageUrl: imageAssets.imgWPantaiHarlem,
            title: 'Adat Istiadat',
        },
    ];

    return (
        <div className="mx-auto mt-24">
            <h1 className="text-center text-3xl font-poppins font-semibold text-white w-5/12 mx-auto py-3">Ada apa di papua?</h1>
            <div className="flex flex-col lg:flex-row  justify-center mx-10 lg:mx-24">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

const ProductCard = ({ imageUrl, title }) => {
    return (
        <div className="w-11/12 relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
            <img className="object-cover w-full h-80" src={imageUrl} alt={title} />      <div className="items-center text-center m-3">
                <p className="text-lg font-bold text-gray-700 dark:text-gray-200">{title}</p>
            </div>
        </div>
    );
};

export default Menu;
