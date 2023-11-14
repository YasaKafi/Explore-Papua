"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import BasicTabs from "@/components/TabsAdatIstiadat";

export default function AdatIstidat() {
  const texts = [
    "Tradisi Adat",
    "Tarian Adat",
    "Pakaian Adat",
    "Rumah Adat",
    "Alat musik",
    "Senjata",
  ];
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <div className="w-full mt-40 text-center text-neutral-50 lg:text-6xl md:text-4xl sm:text-4xl font-bold font-['Poppins'] leading-10">
          Adat Istiadat Papua
        </div>

        <div className="bg-black  h-2/3 w-4/5 mt-20">
          <BasicTabs />
        </div>
      </div>
    </div>
  );
}
