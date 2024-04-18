import React from "react";
import { RevealLeft, scrollDown } from "./utils/animations";

const Home = () => {

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="container mx-auto flex-grow flex flex-col items-center justify-center"> {/* Centering text horizontally and vertically */}
                <RevealLeft>
                    <h1 className="animate-typing overflow-hidden whitespace-nowrap text-6xl text-center font-bold">
                        Hello, I'm Glad You Visited
                    </h1>
                </RevealLeft>
            </div>
            <div className="flex-shrink-0 mb-8">
                <button onClick={scrollDown} className="scrollbtn w-20 h-20 rounded-full"> 
                    <i className="fas fa-chevron-down text-4xl"></i>
                </button>
            </div>
        </div>
    );
}

export default Home;
