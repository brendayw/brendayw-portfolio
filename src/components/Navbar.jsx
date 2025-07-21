import React from 'react';
import { Link } from 'react-router-dom';
import downloadImage from '../assets/icons8-download-48.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div id="logo" className="flex-shrink-0">
            <img 
              src="portraits/logo-brenda.png" 
              alt="Brenda's Logo" 
              className="w-8 h-8"
            />
          </div>
        
          {/* Navbar links - Contenedor central */}
          <div className="flex-1 flex justify-center">
            <div className="flex gap-8 items-center">
              <Link className="text-[#CAC426] hover:text-[#BCB4FF] rounded-2xl px-6 py-1 hover:text-[18px] transition" to="/">Home </Link>
              <Link className="text-[#CAC426] hover:text-[#BCB4FF] rounded-2xl px-6 py-1 hover:text-[18px] transition" to="projects">Projects</Link>
              <Link className="text-[#CAC426] hover:text-[#BCB4FF] rounded-2xl px-6 py-1 hover:text-[18px] transition" to="/skills">Skills</Link>
              <Link className="text-[#CAC426] hover:text-[#BCB4FF] rounded-2xl px-6 py-1 hover:text-[18px] transition" to="contact">Contact</Link>
            </div>
          </div>

          {/* Resume button y toggle - Contenedor derecho */}
          <div className="flex items-center gap-6">
            <a
              href="/cv/Brenda-Yañez-CV.pdf"
              passHref
              legacyBehavior
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CAC426] hover:bg-[#BCB4FF] text-[#222223] hover:text-[#FFFEEC] px-8 py-2 rounded-2xl transition flex items-center gap-2"
            >
              Resume
              <img src={downloadImage} className='w-5 h-5'></img>
            </a>

            {/* Toggle switch */}
            {/* <div className="theme-switch">
              <input type="checkbox" id="switch" className="hidden" />
              <label className="flex items-center cursor-pointer" htmlFor="switch">
                <img className="moon w-6 h-6" src="/assets/moon.svg" alt="Dark mode" />
                <img className="sun w-6 h-6 ml-2" src="/assets/sun.svg" alt="Light mode" />
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;