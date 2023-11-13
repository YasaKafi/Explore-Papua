import React from "react";
import CardPotensi from "@/components/CardPotensi";
import NavBar from "@/components/NavBar";
import imageAssets from "@/utils/helpers";
import PieChart from "@/components/PieChart";
import CardAspek from "@/components/CardAspek";
import Footer from "@/components/Footer";

export default function PerekonomianPapua() {

  const backgroundImage = {
    backgroundImage: `url(${imageAssets.imgWPuncakJaya})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundPositionY: "-0px",
  };
  const data = [54, 16, 14, 16];
  const content = (
    <div className="text-black text-base">
          Perekonomian Papua masih didominasi oleh sektor-sektor primer, yaitu pertambangan dan penggalian, pertanian, dan kehutanan. Namun, sektor-sektor sekunder, seperti industri pengolahan dan perdagangan, juga mulai menunjukkan pertumbuhan yang positif. Sektor pariwisata juga memiliki potensi yang besar untuk dikembangkan di Papua, mengingat wilayah ini memiliki kekayaan alam dan budaya yang luar biasa.
    </div>
  );

  return (
    <div>
      <NavBar />
      <div className="relative w-full h-96 mt-20">
          <img
            className="w-full h-full object-cover"
            style={backgroundImage}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-100 to-black"></div>
          <div className="absolute inset-0 justify-center items-center">
          <p className=" w-full text-3xl sm:text-5xl text-center font-semibold font-poppins mt-56 md:mt-60">
            Perekonomian Papua
          </p>
          <p className="text-center mx-8 sm:mx-20 text-base sm:text-xl font-poppins mt-8 md:mt-14">
            Papua dikenal dengan sumber daya alam yang melimpah. Hutan hujan yang
            kaya akan biodiversitas, tambang emas dan tembaga, serta potensi
            kelautan yang besar, semuanya menjadi bagian integral dari ekonomi
            Papua yang dapat menjadi penopang utama perekonomian regional.
            Potensi ini meliputi:
          </p>
          </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-5 md:gap-10 mt-40 md:mt-32">
          <CardPotensi
            title={"Hutan Hujan Tropis"}
            description={
              "Papua memiliki hutan hujan tropis yang luas, yang merupakan rumah bagi berbagai macam flora dan fauna. Hutan ini memiliki potensi yang besar untuk dikembangkan untuk berbagai tujuan, seperti industri kayu, pariwisata, dan konservasi. Industri kayu di Papua merupakan salah satu industri yang penting, dan telah memberikan kontribusi yang signifikan terhadap pertumbuhan ekonomi regional."
            }
          />
          <CardPotensi
            title={"Tambang Emas & Tembaga"}
            description={
              "Papua memiliki cadangan tambang yang sangat besar, termasuk tembaga, emas, perak, nikel, dan minyak bumi. Cadangan tembaga di Papua merupakan yang terbesar di dunia, dan cadangan emas di Papua merupakan yang terbesar kedua di Indonesia. Tambang-tambang ini telah menjadi sumber utama pendapatan bagi Papua, dan telah memberikan kontribusi yang signifikan terhadap pertumbuhan ekonomi regional"
            }
          />
          <CardPotensi
            title={"Kelautan"}
            description={
              "Papua memiliki wilayah laut yang luas, yang kaya akan sumber daya ikan. Laut Papua juga memiliki potensi untuk dikembangkan untuk berbagai tujuan, seperti perikanan, pariwisata, dan energi terbarukan. Perikanan merupakan salah satu industri yang penting di Papua, dan telah memberikan kontribusi yang signifikan terhadap pertumbuhan ekonomi regional. Pemanfaatan sumber daya alam di Papua dapat berpengaruh positif terhadap perkembangan ekonomi regional. Namun, pemanfaatan ini harus dilakukan secara berkelanjutan, agar tidak merusak lingkungan dan merugikan masyarakat lokal."
            }
          />
      </div>

      <div className="flex justify-center mt-20 w-full h-full">
        <PieChart data={data} content={content}  />
      </div>

      <div className="flex flex-col mt-20 sm:flex-row sm:justify-center gap-10 px-8 md:px-32 items-center">
        <div className=" w-full  md:w-1/4 rounded-xl bg-[#869c4f] px-6 py-12 content-center">
          <p className=" text-2xl font-bold font-poppins">PAPUA</p>
          <p className=" text-2xl font-bold font-poppins">DALAM GLOBAL</p>
          <p className=" text-sm font-poppins mt-2">Ekonomi Papua tidak bisa dipisahkan dari konteks global. Papua terhubung dengan ekonomi global melalui perdagangan internasional dan hubungan diplomatik.</p>
        </div>
        <CardAspek 
          title="Perdagangan Internasional" 
          desc="Papua merupakan salah satu provinsi penghasil komoditas ekspor utama Indonesia, seperti tembaga, emas, dan minyak bumi. Komoditas-komoditas ini diekspor ke berbagai negara di dunia, seperti Amerika Serikat, Jepang, China, dan Uni Eropa. Pada tahun 2022, nilai ekspor Papua mencapai Rp. 65,49 triliun. Nilai ini meningkat 14,38% dari tahun sebelumnya.
          "
        />
        <CardAspek 
          title="Hubungan Diplomatik" 
          desc="Papua juga menjalin hubungan diplomatik dengan berbagai negara di dunia. Hubungan ini dijalin melalui kerja sama bilateral, multilateral, dan organisasi internasional. Kerja sama bilateral antara Papua dan negara lain biasanya fokus pada bidang perdagangan, investasi, dan pariwisata. Kerja sama multilateral antara Papua dan negara lain biasanya fokus pada bidang pembangunan ekonomi, lingkungan, dan sosial budaya."
        />
      </div>

      <div className="h-40"></div>
      
    </div>
  );
}
