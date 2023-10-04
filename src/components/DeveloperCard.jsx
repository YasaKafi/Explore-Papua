import React from "react";
import imageAssets from "@/utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function DeveloperCard() {
  return (
    <div className="flex flex-row bg-white w-5/12 p-4 rounded-full">
      <img
        className="w-52 h-52 object-cover rounded-full"
        src={imageAssets.imgFranskaisepo}
        alt=""
      />
      <div className="my-auto flex gap-5 flex-col mx-auto">
        <div className="pe">
          <h1 className="text-4xl font-poppins font-semibold text-secondary">
            Yasa Kafi
          </h1>
          <h3 className="font-poppins text-xl text-slate-500">
            Front-End Developers
          </h3>
        </div>
        <div className="flex flex-row gap-3">
          <div className="rounded-full w-12 h-12 bg-white shadow-xl flex items-center justify-center text-secondary hover:transform animate-bounce hover:scale-150 duration-300 transition-transform">
            <FontAwesomeIcon className="text-3xl" icon={faInstagram} style={{ color: "#252525" }} />
            <a href=""></a>
          </div>
          <div className="rounded-full w-12 h-12 bg-white shadow-xl flex items-center justify-center text-secondary hover:transform animate-bounce hover:scale-150 duration-300 transition-transform">
            <FontAwesomeIcon className="text-3xl" icon={faGithub} style={{ color: "#252525" }} />
            <a href=""></a>
          </div>
          <div className="rounded-full w-12 h-12 bg-white shadow-xl flex items-center justify-center text-secondary hover:transform animate-bounce hover:scale-150 duration-300 transition-transform">
            <FontAwesomeIcon className="text-3xl" icon={faGoogle} style={{ color: "#252525" }} />
            <a href=""></a>
          </div>
          <div className="rounded-full w-12 h-12 bg-white shadow-xl flex items-center justify-center text-secondary hover:transform animate-bounce hover:scale-150 duration-300 transition-transform">
            <FontAwesomeIcon className="text-3xl" icon={faLinkedin} style={{ color: "#252525" }} />
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperCard;
