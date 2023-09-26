'use client'
import Link from "next/link";
import React from "react";
import Routes from "../routes/routes";
import NavBar from "../components/NavBar";
import ImageSlider from "@/components/ImageSlider";
import ImageSlider2 from "@/components/ImageSlider2";


export default function Home(){

    return(
        <body>
            
            <ImageSlider />
            <ImageSlider2 />
            <ImageSlider />
            <h1>Home</h1>
        </body>
    );
}