import React from "react";

const ProjectsData = [
    {
        img: "/imgs/KAT.jpg",
        company: "K A T",
        title: "Kunwar Anil Trading",
        Date: "2023",
        link: "https://kaniltrading.com.kh"
    },

    {
        img: "/imgs/KAT.jpg",
        company: "K A T",
        title: "Kunwar Anil Trading",
        Date: "2023",
        link: "https://kaniltrading.com.kh"
    },

]

let length = ProjectsData.length;
console.log(length);

const Projects = () => {
    return (
    <>
<div className="project grid-rows-1 grid-cols-1 gap-4">
<h2 className="text-6xl font-semibold text-left ml-10">Projects</h2>
    {ProjectsData.map((project, index) => (
        <div key={index} className="flex flex-col mt-10 h-screen relative">
            <div className="image flex flex-col justify-center items-center overflow-hidden">

                <img className="border rounded-lg transition-transform duration-300 transform hover:scale-120" style={{ width: "70%"}} src={project.img} alt="Project 1" />

                <div className="absolute inset-0 bg-white bg-opacity-10 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="w-40 h-40 rounded-full bg-white hover:bg-gray-100 hover:text-black text-black font-normal py-2 px-4 rounded mt-4 border-1 border-black">
                        <a href={project.link} className="no-underline">View Webpage</a>
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