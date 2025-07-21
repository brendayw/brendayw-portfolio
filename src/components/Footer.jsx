import React from 'react';

const Footer = () => {
  return (
    <footer className="relative top-[-50px]">
      <div className="flex gap-1 items-center justify-center text-center mx-auto">
        <p className="text-[#FFFEEC] text-xs">
          © {new Date().getFullYear()} Brenda Yañez's Portfolio. All rights reserved.
        </p>
        <p className="text-[#FFFEEC] text-xs">
          Made with <span className="text-red-500">❤️</span> using React and Tailwind CSS
        </p>        
      </div>
    </footer>
  );
};

export default Footer;