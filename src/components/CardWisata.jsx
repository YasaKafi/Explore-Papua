"use client";

import React from "react";
import imageAssets from "@/utils/helpers";

const locations = [
  {
    name: "Danau sentani",
    description:
      "Danau tropis di Cagar Alam Cyclops Strict yang menjadi habitat ikan pelangi yang terancam punah.",
    imageUrl: imageAssets.imgWDanauSentani,
    href: "https://www.google.com/maps/place/Lake+Sentani",
  },
  {
    name: "Taman Nasional Lorentz",
    description:
      "Taman nasional dengan gletser tropis langka, puncak gunung & area lahan basah rendah.",
    imageUrl: imageAssets.imgWLorentzNationalPark,
    href: "https://www.google.com/maps/place/Lorentz+National+Park",
  },
  {
    name: "Pantai Harlen",
    description:
      "Pantai berpasir putih dengan air yang jernih yang cocok untuk berenang dan snorkeling.",
    imageUrl: imageAssets.imgWPantaiHarlem,
    href: "https://www.google.com/maps/place/Harlen+Beach",
  },
  {
    name: "Air Terjun Karmon",
    description:
      "Air Terjun Karmon memiliki tebing yang tegak dan air terjun yang berjatuhan dengan anggun.",
    imageUrl: imageAssets.imgWLorentzNationalPark,
    href: "https://www.google.com/maps/place/Lorentz+National+Park",
  },
  {
    name: "Raja Ampat",
    description:
      "Tempat ideal untuk penyelam dengan beragam pilihan akomodasi—kapal penyelaman, vila pantai atau di atas air, penginapan rumahan. ",
    imageUrl: imageAssets.imgWRajaAmpat1,
    href: "https://www.google.com/maps/place/Raja+Ampat+Regency",
  },
  {
    name: "Niagara Bihewa",
    description:
      "Salah satu air terjun yang masih sangat alami terletak di tengah-tengah hutan.",
    imageUrl: imageAssets.imgWLorentzNationalPark,
    href: "https://www.google.com/maps/place/Niagara+Bihewa",
  },

];

export default function TravelCard() {
  return (
    <div>
      {locations.map((location, index) => (
        <CardWisata key={index} location={location} />
      ))}
    </div>
  );
}

function CardWisata({ location }) {
  const { name, description, imageUrl, href } = location;

  

  return (
    <div className="relative mx-auto my-4 h-52 w-2/5 rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt="mountain"
        className=" relative -top-16  items-center object-cover"
      />
      <a href={href}>
      <button className="absolute top-2 right-2 p-2 w-16 bg-black opacity-40 border-solid border-2 border-slate text-white text-xs rounded-md hover:animation-rotate">
        Explore
      </button>
      </a>

      <div className="bg-gradient-to-b from-black-300 to-black absolute bottom-0 left-0 right-0 h-full opacity-70" />
      <h4 className="absolute bottom-1/4 mx-5 mb-4 text-lg text-white p-2 ">
        {name}
      </h4>
      <p className="absolute text-xs text-white bottom-2 mx-4">{description}</p>
    </div>
  );
}
