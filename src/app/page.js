"use client";

import React from "react";
import NavBar from "../components/NavBar";

import KilasPapua from "@/components/KilasPapua";

import GalleryPapua from "@/components/GalleryPapua";

import HeaderNew from "@/components/New/HeaderNew";
import MenuNew from "@/components/New/MenuNew";
import FooterNew from "@/components/New/FooterNew";

export default function Home() {
  return (
    <body className="bg-secondary">
      <NavBar />
      <HeaderNew />
      <KilasPapua />
      <MenuNew />
      <GalleryPapua />
      <FooterNew />
    </body>
  );
}
