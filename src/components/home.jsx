import React from "react";
import { RevealLeft, scrollDown } from "./utils/animations";

const Home = () => {
    return (
        <div className="lg:w-auto flex flex-col h-screen items-center justify-center">
            <div className="container mx-auto flex-grow flex flex-col items-center justify-center">
                <RevealLeft>
                    <h1 className="14promax:text-3xl animate-typing overflow-hidden whitespace-nowrap lg:text-7xl md:text-6xl text-center font-bold">
                        Hello, I'm Glad You Visited
                    </h1>
                </RevealLeft>
            </div>
            <div className="flex-shrink-0 mb-8">
                <button onClick={scrollDown} className="14promax:mb-20 lg:mb-0 scrollbtn w-12 lg:w-20 h-12 lg:h-20 rounded-full">
                    <i className="fas fa-chevron-down text-2xl lg:text-4xl"></i>
                </button>
            </div>
        </div>
    );
}

export default Home;
