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
import Footer from "@/components/Footer";



const rtl = true

export default function Home(){

    return(
        <body>
            {/* <ImageSlider rtl={false}/>
            <ImageSlider rtl={true}/>
            <ImageSlider rtl={false}/> */}
            {/* <KilasPapua/> */}
            {/* <ExploreSlider/> */}
            {/* <DeveloperCard
            name="Yasa Kafi"
            jobTitle="Front-End Developer"
            socialMedia1={{  link: "https://www.instagram.com/yaskrazz/" }}
            socialMedia2={{  link: "https://github.com/YasaKafi" }}
            socialMedia3={{  link: "https://www.linkedin.com/in/yasa-razzan-189b56260/" }}
            emailAddress="yasazerina@gmail.com"
            
            /> */}
            <Footer/>
        </body>
    );
}