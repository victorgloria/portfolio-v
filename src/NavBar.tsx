import { FaGithub, FaLinkedin } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const offset = 200; // Adjust this value to set the scroll threshold
        setIsFixed(window.scrollY > offset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full bg-gray-800 text-white py-2 bg-opacity-95 ${isFixed ? 'fixed top-0 z-10' : ''}`}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2">
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

export default NavBar;