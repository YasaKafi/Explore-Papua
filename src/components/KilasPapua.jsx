import React from "react";
import imageAssets from "@/utils/helpers";


const KilasPapua = ()=>{
    return (
        <div>
            <h3 className="bg-primary text-center py-3  text-lg font-poppins font-semibold w-7/12 max-w-90 mx-auto rounded-xl relative top-6 sm:w-5/12 md:w-4/12 lg:w-3/12">Sekilas tentang Papua</h3>
            <div className="bg-white mx-10 rounded-2xl  flex-col gap-5  sm:flex-col sm:mx-20  lg:flex-row lg:justify-center lg:mx-52 flex py-10 px-10">
                <img className="mx-auto w-11/12 h-9/12 object-cover sm:w-11/12 md:w-10/12 lg:w-7/12 lg:mx-0" src={imageAssets.imgMIkanBakarManokwari} alt="" />
                <p className="text-black mx-auto tracking-tighter w-11/12 text-justify sm:w-10/12 md:w-10/12 lg:w-6/12 lg:mx-0">Papua adalah provinsi yang terletak di bagian timur Indonesia dan berbagi pulau dengan negara tetangga Papua Nugini. Wilayah ini dikenal karena lanskapnya yang beragam, termasuk pegunungan, hutan tropis, dan pantai yang indah. Papua juga memiliki kekayaan budaya yang kaya dengan berbagai suku dan etnis yang mendiami wilayah ini. Namun, provinsi ini juga dihadapkan pada berbagai tantangan sosial dan politik, termasuk konflik separatisme, masalah hak asasi manusia, dan akses terhadap fasilitas kesehatan dan pendidikan yang memadai. Pemerintah Indonesia telah berkomitmen untuk mengembangkan Papua melalui program pembangunan yang bertujuan meningkatkan kualitas hidup masyarakat dan menjaga kelestarian sumber daya alamnya.</p>
            </div>
        </div>
    )
}


export default KilasPapua;