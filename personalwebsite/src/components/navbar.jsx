import React from "react";
import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar top-0 bg-transparent pt-0 p-0">
            <div className="justify-end flex text-xl">
                <ul className="flex">
                    <li className="m-3">
                        <a href="#" className="text-black ">Home</a>
                    </li>
                    <li className="m-3">
                        <a href="#" className="text-black">About</a>
                    </li>
                    <li className="m-3">
                        <a href="#" className="text-black ">Projects</a>
                    </li>
                    <li className="m-3 mr-10">
                        <a href="#" className="text-black">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
