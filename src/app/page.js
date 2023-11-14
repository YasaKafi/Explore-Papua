'use client'
import Link from "next/link";
import React from "react";
import Routes from "../routes/routes";
import NavBar from "../components/NavBar";
import SearchBar from "@/components/SearchBar";
import ImageSlider from "@/components/ImageSlider";
import KilasPapua from "@/components/KilasPapua"; 
import CardExplore from "@/components/CardExplore"; 
import Explore from "@/components/Explore";
import ExploreSlider from "@/components/ExploreSlider"
import DeveloperCard from "@/components/DeveloperCard";
import PieChart from "@/components/PieChart";
import Footer from "@/components/Footer";
import CardImg from "@/components/CardImg";
import SliderWisata from "@/components/SliderWisata";
import CardWisata from "@/components/CardWisata";
import GalleryPapua from "@/components/GalleryPapua";
import Header from "@/components/Header";


import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import HeaderNew from "@/components/New/HeaderNew";
import MenuNew from "@/components/New/MenuNew";
import FooterNew from "@/components/New/FooterNew";


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);




export default function Home(){

    
    return(
        <body className="bg-secondary">
            <NavBar/>
            <HeaderNew/>
            <KilasPapua/>
            <MenuNew/>
            <GalleryPapua/>
            <FooterNew/>
        </body>
    );
}