'use client'
import Link from "next/link";
import React from "react";
import Routes from "../routes/routes";
import NavBar from "../components/navbar";

export default function Home(){

    return(
        <body>
            <NavBar />
            
            <h1>Home</h1>
        </body>
    );
}