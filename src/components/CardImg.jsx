import React from "react";
import imageAssets from "../utils/helpers";

const CardImg = () => {
  const imageFileName = imageAssets.imgTTariSajojo
    .split("/")
    .pop()
    .split(".")[0];

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 ">
      <div className="group h-96 w-80 ">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              src={imageAssets.imgTTariSajojo}
              alt={imageFileName}
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 "
            />
            <div className="absolute bottom-4 left-4 bg-transparent text-4xl text-white p-2 opacity-80 group-hover:opacity-0 transition-opacity ">
              Tari Sajojo
            </div>
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">Tari Sajojo</h1>
                <p className="text-base mt-4 text-justify">
                  Tarian Sajojo, ikon Papua, tampil di berbagai acara.
                  Gerakannya enerjik dan ceria, dengan lagu tentang gadis di
                  kampung yang dicintai. Budaya dan adat Papua tercermin dalam
                  seni ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImg;