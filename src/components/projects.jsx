import React from "react";
import { RevealLeft, fadeDown } from "./utils/animations";

const ProjectsData = [
    {
        img: "/imgs/Kaniltrading.jpg",
        company: "K A T",
        title: "E-commerce Website",
        Date: "2023",
        link: "https://kaniltrading.com.kh"
    },

    {
        img: "/imgs/athena.jpg",
        company: "Apsan",
        title: "Python Voice Assistant",
        Date: "2022",
        link: "https://dree3jqil7udx.cloudfront.net"
    },

];

function openLink(link) {
    window.open(link, "_blank");
}

const Projects = () => {
    return (
    <>
<div className="project grid-rows-1 grid-cols-1 lg:gap-4">
<RevealLeft><h2 className="lg:text-6xl 14promax:text-5xl font-semibold text-left lg:ml-10 14promax:ml-3">PROJECTS</h2></RevealLeft>
    {ProjectsData.map((project, index) => (

       <div key={index} className="flex flex-col mt-10 lg:h-screen relative">
  <div className="image flex flex-col justify-center items-center overflow-hidden ">
     <img className="border-2 rounded-lg transition-transform duration-300 transform hover:scale-120 lg:w-70vw 14promax:w-85vw" src={project.img} alt="Project 1" />
            
                <div className="absolute inset-0 bg-white bg-opacity-30 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => openLink(project.link)} className="lg:text-base 14promax:text-xs lg:w-40 lg:h-40 14promax:w-20 14promax:h-20 rounded-full bg-white hover:bg-gray-100 lg:hover:text-black lg:text-black 14promax:text-gray-400 font-normal lg:py-2 lg:px-4 rounded lg:mt-4 14promax:mb-20 border-1 border-black">
                        View Webpage
                    </button>
                </div>
            
            <div className="flex flex-row lg:gap-80 14promax:gap-5 mt-4">
                <p className="lg:text-2xl 14promax:text-1xl font-normal text-left">{project.company}</p>
                <p className="lg:text-2xl 14promax:text-1xl font-normal text-center">{project.title}</p>
                <p className="lg:text-1xl 14promax:text-xs  font-normal text-right">({project.Date})</p>
            </div></div>
     
        </div>
        
    ))}
</div>
</>

    );
}


export default Projects;