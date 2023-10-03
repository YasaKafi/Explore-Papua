import React from "react";
import CardExplore from "./CardExplore";
import ExploreSlider from "./ExploreSlider";


export default function Explore(){
    return(
        <div className="  flex-col md:flex md:flex-col lg:flex-row lg:items-center  flex items-center" >
            <CardExplore/>
            <ExploreSlider/>
        </div>
    )
}