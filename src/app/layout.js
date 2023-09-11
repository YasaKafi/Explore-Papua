"use client";
import Link from "next/link";
import "./globals.css";
import "./utils/helpers.js";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Routes from "./routes/routes";
import imageAssets from "./utils/helpers.js";
import CardImg from "./components/CardImg";
import CardSenjata from "./components/CardSenjata";
import CardAspek from "./components/CardAspek";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  const goToPage = (path) => {
    router.push(path);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ul>
          <li>
            <Link href={Routes.HOME_PAGE}>Home</Link>
          </li>
          <li>
            <Link href={Routes.DASHBOARD_PAGE}>Dashboard</Link>
          </li>
          <li>
            <button onClick={() => goToPage(Routes.SETTING_PAGE)}>
              Settings
            </button>
          </li>
        </ul>
        <NavBar />
        <CardAspek />
        <CardImg />
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Hello World</h1>
          <img src={imageAssets.imgMSinole} alt="logo" />
        </div>
        <CardSenjata />
        
        
      </body>
    </html>
  );
}
