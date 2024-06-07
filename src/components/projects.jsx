import React, { useState, useRef } from "react";
import { RevealLeft, fadeDown } from "./utils/animations";

function openLink(link) {
  window.open(link, "_blank");
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const kanilref = useRef(null);
  const siddhiref = useRef(null);
  const athenaref = useRef(null);

  const ProjectsData = [
    {
      img: "/imgs/Kaniltrading.jpg",
      mini: "/imgs/Responsive_KAT.PNG",
      ref: kanilref,
      company: "K A T",
      title: "E-commerce Website",
      Date: "2023",
      link: "https://kaniltrading.com.kh",
    },
    {
      img: "/imgs/SiddhiGanesh.jpg",
      mini: "/imgs/Responsive_SG.PNG",
      ref: siddhiref,
      company: "S.G. Driving Center",
      title: "Driving School Website",
      Date: "2024",
      link: "https://siddhiganeshdc.onrender.com",
    },
    {
      img: "/imgs/athena.jpg",
      mini: "/imgs/Responsive_Athena.PNG",
      ref: athenaref,
      company: "Apsan",
      title: "Python Voice Assistant",
      Date: "2022",
      link: "https://dree3jqil7udx.cloudfront.net",
    },
  ];

  return (
    <>
      <div className="project grid-rows-1 grid-cols-1 lg:gap-4">
        <RevealLeft>
          <h2 className="lg:text-6xl 14promax:text-5xl font-semibold text-left lg:ml-10 14promax:ml-3">
            PROJECTS
          </h2>
        </RevealLeft>
        <div className="flex flex-col justify-center items-center lg:gap-4">
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col mt-10 lg:h-screen relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              ref={project.ref}
            >
              <div className="image flex flex-col rounded-xl justify-center items-center overflow-hidden">
                <img
                  className="shadow-xl rounded-lg transition-transform duration-300 transform hover:scale-120 lg:w-70vw 14promax:w-85vw"
                  src={project.img}
                  alt="Project"
                />
                <div className="border-black phone-image absolute w-full lg:grid grid-cols-2 items-center overflow-hidden z-100 hidden">
                  <div className="none"></div>
                  <img
                    className="lg:h-[550px] w-full mb-12"
                    src={project.mini}
                    alt="Project Mini"
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-white bg-opacity-30 flex justify-center items-center transition-opacity duration-300 w-full lg:h-[70vh] ${
                    hoveredIndex === index ? "flex" : "hidden"
                  } hover:opacity-100`}
                >
                  <button
                    onClick={() => openLink(project.link)}
                    className="lg:text-base 14promax:text-xs lg:w-40 lg:h-40 14promax:w-20 14promax:h-20 rounded-full bg-white hover:bg-gray-100 lg:hover:text-black lg:text-black 14promax:text-gray-400 font-normal lg:py-2 lg:px-4 rounded lg:mt-4 14promax:mb-20 border-1 border-black"
                  >
                    View Webpage
                  </button>
                </div>
                <div className="flex flex-row lg:gap-80 14promax:gap-5 mt-4">
                  <p className="lg:text-2xl 14promax:text-1xl font-normal text-left">
                    {project.company}
                  </p>
                  <p className="lg:text-2xl 14promax:text-1xl font-normal text-center">
                    {project.title}
                  </p>
                  <p className="lg:text-1xl 14promax:text-xs font-normal text-right">
                    ({project.Date})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
