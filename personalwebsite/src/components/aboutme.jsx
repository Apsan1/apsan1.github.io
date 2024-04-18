import React from "react";
import { Reveal } from "./utils/animations";

const AboutMe = () => {
    return (
        
        <div className="grid grid-cols-2 px-20 row-span-1 h-screen">
                <div className="flex flex-col col-span-1 ">
                <Reveal>
                <img className="w-auto h-auto border rounded-full" src="/imgs/me.jpg" alt="My Profile Picture"/>
                </Reveal>
                <h1 className="text-4xl font-normal text-center mr-60">Apsan Rana Magar</h1>
                </div>

                <div className="flex flex-col col-span-1 px-20 ">
                <h1 className="text-5xl font-semibold">About</h1>
                <div className="text-lg mt-8">
                    {/* <ul>
                        <li className="text-2xl mt-3"><span className="font-semibold text-2xl">JavaScript:</span> React, Node, Vue, Angular</li>
                        <li className="text-2xl mt-3"><span className="font-semibold text-2xl">Python:</span> Django, PyQt, TensorFlow, Pandas, NumPy </li>
                        <li className="text-2xl mt-3"><span className="font-semibold text-2xl">Java:</span> Spring, Flutter </li>
                        <li className="text-2xl mt-3"><span className="font-semibold text-2xl">Database:</span> MySQL, SQLite</li>
                        <li className="text-2xl mt-3"><span className="font-semibold text-2xl">Version Control:</span> Git</li>
                        <li className="text-2xl mt-3"><span className="font-semibold text-2xl">C Programming:</span> Data Structures, Algorithms, Arduino</li>
                        <li className="text-2xl mt-3"><span className="font-semibold text-2xl">Others:</span> HTML, CSS, SASS, TailwindCSS, Bootstrap</li>
                    </ul> */}
                    <Reveal>
                    <h1><span className="text-xl font-semibold">School</span>: R.I.B.S School <span className="text-xs">(Science & Maths)</span></h1>
                    <h1><span className="text-xl font-semibold">High School</span>: Trinity International College <span className="text-xs">(Physics & Chemistry)</span></h1>
                    <h1><span className="text-xl font-semibold">Undergraduate</span>: Herald College Kathmandu <span className="text-xs">(CSIT: Ongoing)</span></h1>
                    </Reveal>
                </div>
                
                <Reveal>
                <p className="text-normal font-normal mt-10">
                    As a student, I have excellence on Academics, Sports, and Extra-Curricular Activities. 
                    I have been awarded for my excellence in various fields.
                    <br />
                    I have been working as a Web Developer for the past 2 years. I have worked on various projects and have gained experience in various fields.
                    I have worked on various projects and have gained experience in various fields.
                    <br />
                    I am also part time teacher at Study School, Nepal where I teach Science and Computer Science to students of Grade 6 to 10.
                </p>
                </Reveal>
                </div>
            </div>
    );
}

export default AboutMe;