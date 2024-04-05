import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent lg:fixed top-0 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 py-6">
            <ul className="flex space-x-4">
            <li>
                <a href="https://github.com/victorgloria">
                    <FaGithub className='text-3xl'/>
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/victor-gloria-94b88a274/'>
                    <FaLinkedin className='text-3xl'/>
                </a>
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;