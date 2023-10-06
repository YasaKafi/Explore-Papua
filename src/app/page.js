'use client'
import Link from "next/link";
import React from "react";
import Routes from "../routes/routes";
import NavBar from "../components/NavBar";
import ImageSlider from "@/components/ImageSlider";
import ExploreSlider from "@/components/ExploreSlider";

const rtl = true

export default function Home(){

    return(
        <body>
           <ExploreSlider/>
        </body>
    );
}