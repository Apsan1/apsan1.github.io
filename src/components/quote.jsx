import React, { useState } from 'react';
import { OutroBottom } from './intro-top.jsx'
import { RevealLeft } from './utils/animations';

export const Quote1 = () => {
    return (
        <div className="14promax:mt-0 lg:mt-0 h-screen flex flex-col justify-center items-center">
        <div className="14promax:text-2xl lg:text-4xl font-normal text-center lg:w-50vw 14promax:w-70vw">
          <RevealLeft> 
             <p className="text-left">
                Elevating businesses with minimalist sophistication, I specialize in crafting
                compelling visual narratives for global audiences.
                 <br /> <br />
                Whether working directly
                with clients or supporting agencies worldwide, I help brands make meaningful
                connections and drive growth.
            </p>
            </RevealLeft>
        </div>
    </div>
    );
}


export const Quote2 = () => {
    const [text, setText] = useState("Ready?");

    return (
        <>
       <RevealLeft> <div className="lg:h-screen lg:mt-0  14promax:mt-40 flex flex-col justify-center items-center">
            <div className="lg:text-4xl 14promax:text-2xl font-normal text-center lg:w-50vw 14promax:w-70vw">
                <p className="text-left">
                    Ready to elevate your brand into the calming realm of minimalist design and increase your global reach?
                    <br /><br />
                    Take the leap and begin the dialogue today to discover how we can tailor our digital design expertise to suit your needs.
                </p>
            </div>
            <button 
            className="w-40 bg-black hover:bg-white hover:text-black text-white font-normal py-2 px-4 rounded mt-4 border-2 border-black transition-colors duration-300"
            onMouseEnter={() => setText("Connect with me")} 
            onMouseLeave={() => setText("Ready?")}
        >
            {text}
        </button>
        </div>

        <div className="text-left items-left mx-10">
                <OutroBottom />
        </div>
        </RevealLeft>
    </>
      

    );
};

