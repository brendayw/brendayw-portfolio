import { useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from '../hooks/useTypewritter';
import image from '../assets/portraits/brenda.png';
import github from '../assets/icons8-github.svg';
import githubLila from '../assets/icons8-github-lila.svg';
import gmail from '../assets/icons8-gmail.svg';
import gmailLila from '../assets/icons8-gmail-lila.svg';
import linkedin from '../assets/icons8-linkedin.svg';
import linkedinLila from '../assets/icons8-linkedin-lila.svg';

const icons = [
  {
    name: "GitHub",
    normal: github,
    hover: githubLila,
    link: "https://github.com/brendayw"
  },
  {
    name: "LinkedIn",
    normal: linkedin,
    hover: linkedinLila,
    link: "https://linkedin.com/in/brendayw"
  },
  {
    name: "Email",
    normal: gmail,
    hover: gmailLila,
    link: "mailto:brendayw97@gmail.com"
  }
];

const Hero = () => {
    const [hovered, setHovered] = useState(null);

    const { text: animatedName, cursor } = useTypewriter('Yañez', {
        delay: 100,
        infinite: false,
    });
    
    return (
        <section id="hero" className='min-h-screen flex flex-col md:flex-row items-center justify-between w-full py-8 md:py-16 px-4 sm:px-6 lg:px-8'>
            
            {/* <motion.div 
                className="relative top-10 w-[60%] min-w-[180px] max-w-[320px] md:max-w-[380px] aspect-square mb-12 md:mb-0"
                animate={{
                    y: ["0px", "-8px", "0px", "8px", "0px"],
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            >
                <img
                    src={image}
                    alt="Brenda's profile"
                    className="w-full h-full object-cover rounded-[12%] border-2 border-[#CAC426]"
                />
            </motion.div> */}

        
            <div className='relative flex flex-col md:flex-row items-start md:items-center gap-8 mt-28 md:mt-0'>
                <div className="relative w-full md:w-[70%] text-center md:text-left">
                    {/* md:left-20 mb-12 md:mb-0 md:px-8 */}

                    <h1 className='text-lg italic text-[#FFFEEC] mb-4'>
                        Hi, my name is 
                    </h1>

                    <h2 className='text-4xl sm:text-6xl md:text-7xl font-bold italic text-[#CAC426] mb-8 md:mb-6 hover:text-[#BCB4FF]'>
                        Brenda {animatedName}.
                        <span className="animate-blink">{cursor}</span>
                    </h2>

                    {/* <h3 className='text-sm md:text-md uppercase text-[#FFFEEC] mb-6'>
                        Junior Backend | Software Developer
                    </h3> */}

                    <motion.p
                        className="text-md sm:text-2xl text-[#FFFEEC] leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            damping: 10, 
                            stiffness: 100,
                            delay: 0.5,
                            duration: 0.9
                        }}
                    >
                        I build backend systems and REST APIs using <span className='text-[#CAC426] font-bold italic hover:text-[#BCB4FF]'>Java and Spring Boot, </span>
                        focused on <span className="italic"> clean logic, maintainable code, and scalability. </span>
                       
                    </motion.p>
                </div>

                {/* Iconos sociales - Responsive */}
                <div className="flex flex-row md:flex-col gap-8 md:gap-8 mt-8 md:mt-0 md:ml-36">
                    {icons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <a 
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-1"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <img 
                                    src={hovered === index ? item.hover : item.normal}
                                    alt={item.name} 
                                    className="w-8 h-8 sm:w-10 sm:h-10 transition"
                                />

                                {/* Texto que aparece al hacer hover */}
                                <span className={`ml-2 text-sm text-[#FFFEEC] italic transition-opacity duration-300 ${
                                    hovered === index ? "opacity-100" : "opacity-0"}`}
                                >
                                    {item.name}
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;