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
import SliderWisata from "@/components/SliderWisata";
import CardWisata from "@/components/CardWisata";

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';


// Set up Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


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
            {/* <PieChart data={data} content={content} /> */}
            {/* <DeveloperCard
            name="Yasa Kafi"
            jobTitle="Front-End Developer"
            socialMedia1={{  link: "https://www.instagram.com/yaskrazz/" }}
            socialMedia2={{  link: "https://github.com/YasaKafi" }}
            socialMedia3={{  link: "https://www.linkedin.com/in/yasa-razzan-189b56260/" }}
            emailAddress="yasazerina@gmail.com"
            
            /> */}
            {/* <div className="flex flex-row gap-3 items-center justify-center">
            <CardImg/>
            <CardImg/>
            <CardImg/>
            </div> */}
            {/* <SliderWisata/>
            <CardWisata/> */}
            {/* <App/> */}
            <NavBar/>
            <MyCarousel/>
        </>
    );
}