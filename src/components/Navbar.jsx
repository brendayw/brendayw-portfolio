import { useState } from 'react';
import { Link } from 'react-router-dom';
import downloadImage from '../assets/icons8-download-48.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

          <div className='flex md:hidden ml-auto z-50'>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className='text-[#CAC426] hover:text-[#BCB4FF] focus:outline-none p-2 rounded-md'
              arial-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navbar links - Contenedor central */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex gap-4 lg:gap-8 items-center">
              <Link className="text-[#CAC426] hover:text-[#BCB4FF] rounded-2xl px-3 py-1 md:px-6 hover:text-[18px] transition" to="/">Home </Link>
              <Link className="text-[#CAC426] hover:text-[#BCB4FF] rounded-2xl px-3 py-1 md:px-6 hover:text-[18px] transition" to="projects">Projects</Link>
              <Link className="text-[#CAC426] hover:text-[#BCB4FF] rounded-2xl px-3 py-1 md:px-6 hover:text-[18px] transition" to="/skills">Skills</Link>
              <Link className="text-[#CAC426] hover:text-[#BCB4FF] rounded-2xl px-3 py-1 md:px-6 hover:text-[18px] transition" to="contact">Contact</Link>
            </div>
          </div>

          {/* Resume button y toggle - Contenedor derecho */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="/cv/CV Brenda Yañez - Backend Developer 2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CAC426] hover:bg-[#BCB4FF] text-[#222223] hover:text-[#FFFEEC] px-4 py-2 md:px-8 py-2 rounded-2xl transition flex items-center gap-2 text-sm md:text-base"
            >
              Resume
              <img src={downloadImage} className='w-4 h-4 md:w-5 md:h-5'></img>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#222223] pb-4">
          <div className="px-2 pt-2 space-y-1">
            <Link 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-[#CAC426] hover:text-[#BCB4FF] hover:bg-[#CAC426] hover:bg-opacity-15 rounded-2xl" 
              to="/"
            >
              Home
            </Link>
            <Link 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-[#CAC426] hover:text-[#BCB4FF] hover:bg-[#CAC426] hover:bg-opacity-15 rounded-2xl" 
              to="projects"
            >
              Projects
            </Link>
            <Link 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-[#CAC426] hover:text-[#BCB4FF] hover:bg-[#CAC426] hover:bg-opacity-15 rounded-2xl" 
              to="/skills"
            >
              Skills
            </Link>
            <Link 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-[#CAC426] hover:text-[#BCB4FF] hover:bg-[#CAC426] hover:bg-opacity-15 rounded-2xl" 
              to="contact"
            >
              Contact
            </Link>
            <a
              href="/cv/CV Brenda Yañez - Backend Developer 2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 bg-[#CAC426] hover:bg-[#BCB4FF] text-[#222223] hover:text-[#FFFEEC] rounded-2xl transition flex items-center justify-center gap-2"
            >
              Resume
              <img src={downloadImage} className='w-4 h-4' alt="Download icon"/>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;