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
<div className="project grid-rows-1 grid-cols-1 gap-4">
<RevealLeft><h2 className="text-6xl font-semibold text-left ml-10">PROJECTS</h2></RevealLeft>
    {ProjectsData.map((project, index) => (

       <div key={index} className="flex flex-col mt-10 h-screen relative">
  <div className="image flex flex-col justify-center items-center overflow-hidden ">
     <img className="border-2 rounded-lg transition-transform duration-300 transform hover:scale-120" style={{ width: "70%"}} src={project.img} alt="Project 1" />
            
                <div className="absolute inset-0 bg-white bg-opacity-30 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => openLink(project.link)} className="w-40 h-40 rounded-full bg-white hover:bg-gray-100 hover:text-black text-black font-normal py-2 px-4 rounded mt-4 border-1 border-black">
                        View Webpage
                    </button>
                </div>
            
            <div className="flex flex-row gap-80">
                <p className="text-2xl font-normal text-left mt-4">{project.company}</p>
                <p className="text-2xl font-normal text-center mt-4">{project.title}</p>
                <p className="text-1xl font-normal text-right mt-4">({project.Date})</p>
            </div></div>
     
        </div>
        
    ))}
</div>
</>

    );
}


export default Projects;