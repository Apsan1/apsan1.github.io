import React from "react";

const socialsData = ["fab fa-github", "fab fa-linkedin", "fab fa-instagram", "fab fa-facebook-f"];
const socialsLink = ["github.com/Apsan1", "https://www.linkedin.com/in/apsan/", "https://www.instagram.com/apsan_xd/", "https://www.facebook.com/apsan.fb/"];

const Socials = () => {
    return (
        <div className="flex w-full flex-row justify-center">
            {socialsData.map((icon, index) => (
                <SocialsEach key={index} icon={icon} link={socialsLink[index]} />
            ))}
        </div>
    );
}

const SocialsEach = ({ icon, link }) => {
    return (
        <a href={link} target
            = "_blank" className="text-4xl text-black p-5 ">
            <i className={icon}></i>
        </a>
    );
}
export default Socials;