import Link from "next/link";
import React from "react";
import Routes from "./routes/routes";

export default function Home(){

    return(
        <div>

            
            <Link href={Routes.DASHBOARD_PAGE}> Dashboard</Link>
            <Link href={Routes.SETTING_PAGE}> Setting</Link>
            <Link href={Routes.SETTING_PAGE}> 
            <h1 >Page</h1></Link>
        </div>
    );
}