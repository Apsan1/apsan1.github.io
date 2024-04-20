import React from "react";
import { Reveal, RevealLeft, FadeIn } from "./utils/animations";

const ExperienceData = () => {
    return (
        <div className="desc">
       <RevealLeft> <h1 className="lg:text-8xl 14promax:text-5xl font-semibold text-left lg:ml-10 14promax:ml-3">EXPERIENCE</h1></RevealLeft>
        <div className="h-screen" >
        <Reveal><h2 className="lg:text-6xl 14promax:text-4xl font-semibold text-left lg:ml-10 14promax:ml-3">Tutor</h2></Reveal>
        <div className="grid lg:grid-cols-2 14promax:grid-rows-2 lg:gap-20 lg:mt-10 lg:ml-0 14promax:ml-3 items-center justify-center">
        <FadeIn><img src="imgs/School.jpeg" alt="school" className="lg:col-span-1 14promax:row-span-1 14promax:ml-8 14promax:w-80vw lg:w-full h-auto rounded-lg lg:ml-10" /></FadeIn>
        <div className="col-span-1">
        <RevealLeft> <h1 className="text-4xl font-light">Teacher at </h1> </RevealLeft>
        <RevealLeft>  <h2 className="text-2xl font-bold">STUDY SCHOOL, NEPAL</h2> </RevealLeft>
            <FadeIn>  
            <div className="text-xl font-medium mt-4">
               Sharing knowledge is the best way to learn.
                I have been teaching students for the past 2 years. 
                 I have taught the following subjects:
                
                    <ul className="teachlist text-lg font-normal lg:mx-4">
                    <li> Science</li>
                    <li> Computer Science</li>
                    <li> OBTE</li>
                    <li> Social Studies</li>
                    <li>  G.K.</li>
                </ul>
                
            </div>
            </FadeIn>
        </div>
    </div>
    </div>
    
    </div>
    );
}

export default ExperienceData;