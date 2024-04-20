import React from "react";
import { IntroTop } from "./intro-top";
import { Reveal, scrollDown } from "./utils/animations";

const Details = () => {
    return (
        <>
        <div className="lg:h-screen">
        <IntroTop />
        <div className="grid grid-rows-1 gap-1">
        <div className="flex flex-col col-span-1 lg:pl-9 14promax:pl-3 ">
            <div className="lg:mt-6 14promax:mt-2 14promax:w-70 lg:w-40vw ">
            <Reveal>
            <p className="14promax:text-2xl 14promax:text-left lg:text-3xl lg:text-justify font-normal mt-2">
                Excelling in fostering global business expansion through the finesse of minimalist web design.
            </p>
            </Reveal>
            </div>
           
            <button className="w-40 bg-black hover:bg-white hover:text-black text-white font-normal py-2 px-4 rounded mt-4 border-2 border-black">
                <a href="https://www.linkedin.com/in/apsan/" className="no-underline">Connect with me</a>
            </button>
            <button className="text-3xl text-blue-900 text-left font-light underline" onClick={scrollDown}>About Me</button>
        </div>

        </div>
        </div>
        </>
    );
}

export default Details;
