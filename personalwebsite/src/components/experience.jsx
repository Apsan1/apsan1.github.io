import React from "react";

const ExperienceData = () => {
    return (
        <div className="desc">
        <h1 className="text-8xl font-semibold text-left ml-10">EXPERIENCE</h1>
        <div className="h-screen" >
        <h2 className="text-6xl font-semibold text-left ml-10">Teaching</h2>
        <div className="grid grid-cols-2 gap-20 mt-10">
        <img src="imgs/School.jpeg" alt="school" className="col-span-1 w-full h-auto rounded-lg ml-10" />
        <div className="col-span-1">
            <h1 className="text-2xl font-medium">Teacher at </h1>
            <h2 className="text-2xl font-bold">Study School, Nepal</h2>
            <div className="text-xl font-medium mt-4">
               I teach:
                  <ul className="text-lg font-normal mx-4">
                    <li> * Science</li>
                    <li> * Computer Science</li>
                    <li> * OBTE</li>
                    <li> * Social Studies</li>
                    <li> * G.K.</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    
    </div>
    );
}

export default ExperienceData;