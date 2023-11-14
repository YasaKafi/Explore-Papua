import React from "react";
import imageAssets from "@/utils/helpers";
import HeaderText from "../HeaderText";
import ButtonHero from "./ButtonHero";

const HeaderNew = () => {
  const headerStyle = {
    backgroundImage: `url(${imageAssets.imgWRajaAmpat3})`,
  };

  return (
    <div className="relative mb-15 lg:h-1/12 overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover backdrop-blur-md bg-gradient-to-b from-transparent via-black-100 to-black h-5/12"
        style={headerStyle}
      />
      <div className="absolute inset-0 bg-black opacity-50  transition-opacity" />
      <div className="relative py-64">
        <HeaderText />
        <ButtonHero />
      </div>
    </div>
  );
};

export default HeaderNew;
