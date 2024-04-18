import React from "react";
import { IntroTop } from "./intro-top";

const Details = () => {
    return (
        <div className="grid grid-rows-3 gap-1 h-screen">
        <div className="flex flex-col col-span-1 pl-9 ">
            <IntroTop />
            <div className="mt-6" style={{width: "40%"}}>
            <p className="text-3xl text-justify font-normal mt-2">
                Excelling in fostering global business expansion through the finesse of minimalist web design.
            </p></div>

            <button className="w-40 bg-black hover:bg-white hover:text-black text-white font-normal py-2 px-4 rounded mt-4 border-2 border-black">
                <a href="https://www.linkedin.com/in/apsan/" className="no-underline">Connect with me</a>
            </button>
        </div>
        </div>
    );
}

export default Details;
