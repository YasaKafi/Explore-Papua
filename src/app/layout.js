"use client";
import Link from "next/link";
import "./globals.css";
import "./utils/helpers.js";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faInfo, faCompass, faImages, faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faInfo, faCompass, faImages, faUser);
import Routes from "./routes/routes";
import imageAssets from "./utils/helpers.js";
import CardImg from "./components/CardImg";
import CardSenjata from "./components/CardSenjata";
import CardAspek from "./components/CardAspek";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  const goToPage = (path) => {
    router.push(path);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
       
        <NavBar />
        
        <CardAspek/>
        <SearchBar />
        <CardSenjata/>
       
        
        
        
      </body>
    </html>
  );
}
