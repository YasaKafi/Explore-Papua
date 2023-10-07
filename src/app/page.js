'use client'
import Link from "next/link";
import React from "react";
import Routes from "../routes/routes";
import NavBar from "../components/NavBar";
import ImageSlider from "@/components/ImageSlider";
import KilasPapua from "@/components/KilasPapua"; 
import CardExplore from "@/components/CardExplore"; 
import Explore from "@/components/Explore";
import ExploreSlider from "@/components/ExploreSlider"
import DeveloperCard from "@/components/DeveloperCard";
import PieChart from "@/components/PieChart";
import CardImg from "@/components/CardImg";

const rtl = true

export default function Home(){

    const data = [54, 16, 14, 16];
    const content = (
        <div className="text-black text-base">
          Perekonomian Papua masih didominasi oleh sektor-sektor primer, yaitu pertambangan dan penggalian, pertanian, dan kehutanan. Namun, sektor-sektor sekunder, seperti industri pengolahan dan perdagangan, juga mulai menunjukkan pertumbuhan yang positif. Sektor pariwisata juga memiliki potensi yang besar untuk dikembangkan di Papua, mengingat wilayah ini memiliki kekayaan alam dan budaya yang luar biasa.
        </div>
      );
    return(
        <>
            {/* <ImageSlider rtl={false}/>
            <ImageSlider rtl={true}/>
            <ImageSlider rtl={false}/> */}
            {/* <KilasPapua/> */}
            {/* <ExploreSlider/> */}
            <DeveloperCard/>
        </body>
    );
}