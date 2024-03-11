import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-black">
            <div className="flex items-center justify-center p-4 shadow-md text-textLight">
                <div className="hidden md:block md:absolute md:left-4">
                    <img style={{ width: '50px', height: '50px' }} src={logo} alt='logo' />
                </div>
                <div className="flex gap-2 md:text-2xl">
                    <button onClick={() => scrollToSection('about')} className="font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-300">About</button>
                    <button onClick={() => scrollToSection('skills')} className="font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-300">Skills</button>
                    <button onClick={() => scrollToSection('experience')} className="font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-300">Experience</button>
                    <button onClick={() => scrollToSection('projects')} className="font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-300">Projects</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
