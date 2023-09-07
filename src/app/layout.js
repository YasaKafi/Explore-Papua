"use client";
import Link from "next/link";
import "./globals.css";
import "./utils/helpers.js";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Routes from "./routes/routes";
import imageAssets from "./utils/helpers.js";

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
            <button onClick={()=> goToPage(Routes.SETTING_PAGE)}>Settings</button>
          </li>
        
        </ul>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Hello World</h1>
          <img src={imageAssets.imgMSinole} alt="logo" />
        </div>
        {children}
      </body>
    </html>
  );
}
