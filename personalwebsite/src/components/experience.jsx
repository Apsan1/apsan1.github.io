import React from "react";
import { Reveal, RevealLeft, FadeIn } from "./utils/animations";

const ExperienceData = () => {
    return (
        <div className="desc">
       <RevealLeft> <h1 className="text-8xl font-semibold text-left ml-10">EXPERIENCE</h1></RevealLeft>
        <div className="h-screen" >
        <Reveal><h2 className="text-6xl font-semibold text-left ml-10">Tutor</h2></Reveal>
        <div className="grid grid-cols-2 gap-20 mt-10">
        <FadeIn><img src="imgs/School.jpeg" alt="school" className="col-span-1 w-full h-auto rounded-lg ml-10" /></FadeIn>
        <div className="col-span-1">
        <RevealLeft> <h1 className="text-4xl font-light">Teacher at </h1> </RevealLeft>
        <RevealLeft>  <h2 className="text-2xl font-bold">STUDY SCHOOL, NEPAL</h2> </RevealLeft>
            <FadeIn>  
            <div className="text-xl font-medium mt-4">
               Sharing knowledge is the best way to learn.
                I have been teaching students for the past 2 years. 
                 I have taught the following subjects:
                
                    <ul className="teachlist text-lg font-normal mx-4">
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