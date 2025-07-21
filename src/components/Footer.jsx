import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 bg-[#222223]/50 backdrop-blur-sm z-10">
      <div className="flex flex-col sm:flex-row gap-1 items-center justify-center text-center mx-auto">
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