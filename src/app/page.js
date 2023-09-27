'use client'
import Link from "next/link";
import React from "react";
import Routes from "../routes/routes";
import NavBar from "../components/NavBar";
import ImageSlider from "@/components/ImageSlider";
import KilasPapua from "@/components/KilasPapua"; 

const rtl = true

export default function Home(){

    return(
        <body>
            {/* <ImageSlider rtl={false}/>
            <ImageSlider rtl={true}/>
            <ImageSlider rtl={false}/> */}
            <KilasPapua/>

        </body>
    );
}