import React from "react";
import {Reveal} from "./utils/animations";

export const IntroTop = () => {
    return (
        <>
            <div className="ml-10">
             <Reveal>  <h1 className="intro-name text-8xl font-bold mb-4">Hi, I am Apsan</h1></Reveal> 
             <Reveal>  <h2 className="intro-subject text-7xl font-bold">Web Developer</h2> </Reveal>
            </div>
        </>
    );
}



export const OutroBottom = () => {
    return (
        <>
        <h1 className="text-8xl font-bold mb-4">Apsan</h1>
        <h2 className="text-7xl font-bold">Web Developer</h2>
        </>
    );
}
