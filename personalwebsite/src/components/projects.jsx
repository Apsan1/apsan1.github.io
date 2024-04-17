import React from "react";

const ProjectsData = [
    {
        img: "/imgs/KAT.jpg",
        company: "K A T",
        title: "Kunwar Anil Trading",
        Date: "2023",
    },

    {
        img: "/imgs/KAT.jpg",
        company: "K A T",
        title: "Kunwar Anil Trading",
        Date: "2023",
    },

]

let length = ProjectsData.length;

const Projects = () => {
    // return (
    //     <div className="project flex flex-col justify-center items-center">
            
    //             <img className="border rounded-lg justify-center items-center" style={{width: "70%"}} src="/imgs/KAT.jpg" alt="Project 1"/>
    //             <p className="text-2xl font-normal mt-4">Kunwar Anil Trading</p>
    //     </div>
    // )

    return (
<div className="project grid-rows-1 grid-cols-1 gap-4">
    {ProjectsData.map((project, index) => (
        <div key={index} className="flex flex-col h-screen">
            <div className="image flex justify-center items-center">
                <img className="border rounded-lg" style={{ width: "70%" }} src={project.img} alt="Project 1" />
            </div>
            <div className="flex justify-between mx-60">
            <p className="text-2xl font-normal text-left mt-4">{project.company}</p>
            <p className="text-2xl font-normal text-center mt-4">{project.title}</p>
            <p className="text-1xl font-normal text-right mt-4">({project.Date})</p>
            </div>
        </div>
    ))}
</div>

    );
}


export default Projects;