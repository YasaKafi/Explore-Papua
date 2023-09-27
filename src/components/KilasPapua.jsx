import React from "react";
import imageAssets from "@/utils/helpers";


const KilasPapua = ()=>{
    return (
        <>
            <h3 className="px-25 py-3 w-1/5 bg-primary rounded-xl  text-center mx-auto relative top-3 min-w-max">Sekilas tentang Papua</h3>
            <div className="flex bg items-center justify-center bg-white w-auto mx-56 rounded-2xl md:flex-col xl:flex-row max-w-50bbbbbbbbbb">
                <img className="w-6/12  p-5" src={imageAssets.imgMIkanBakarManokwari} alt="" />
                <p className="text-justify w-6/12 p-5 min-w-6/12  max-h-90  text-black">Papua adalah provinsi yang terletak di bagian timur Indonesia dan berbagi pulau dengan negara tetangga Papua Nugini. Wilayah ini dikenal karena lanskapnya yang beragam, termasuk pegunungan, hutan tropis, dan pantai yang indah. Papua juga memiliki kekayaan budaya yang kaya dengan berbagai suku dan etnis yang mendiami wilayah ini. Namun, provinsi ini juga dihadapkan pada berbagai tantangan sosial dan politik, termasuk konflik separatisme, masalah hak asasi manusia, dan akses terhadap fasilitas kesehatan dan pendidikan yang memadai. Pemerintah Indonesia telah berkomitmen untuk mengembangkan Papua melalui program pembangunan yang bertujuan meningkatkan kualitas hidup masyarakat dan menjaga kelestarian sumber daya alamnya.</p>
            </div>
        </>
    )
}


export default KilasPapua;