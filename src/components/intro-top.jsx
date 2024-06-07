import React from "react";
import {Reveal} from "./utils/animations";

export const IntroTop = () => {
    return (
        <>
            <div className=" lg:mt-20 lg:ml-10 14promax:ml-3 h-70">
             <Reveal>  <h1 className="14promax:text-7xl intro-name lg:text-8xl font-bold mb-4">Hi, I am Apsan</h1></Reveal> 
             <Reveal>  <h2 className="14promax:text-5xl intro-subject lg:text-7xl font-bold h-20">Web Developer</h2> </Reveal>
            </div>
        </>
    );
}



export const OutroBottom = () => {
    return (
        <>
        <h1 className="lg:text-8xl 14promax:text-6xl font-bold mb-4">Apsan</h1>
        <h2 className="lg:text-7xl 14promax:text-5xl font-bold">Web Developer</h2>
        </>
    );
}
