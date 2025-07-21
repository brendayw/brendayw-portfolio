import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useTypewriter } from '../hooks/useTypewritter';
import image from '../assets/portraits/brenda.png';
import github from '../assets/icons8-github-lila.svg';
import gmail from '../assets/icons8-gmail-lila.svg';
import linkedin from '../assets/icons8-linkedin-lila.svg';

const Hero = () => {
    const { text: animatedName, cursor } = useTypewriter('Brenda', {
        delay: 100,
        infinite: false,
    });

    return (
        <section className='flex flex-col md:flex-row items-center justify-between gap-8 w-full py-12'>
            <motion.img
                className="relative top-[-10px] left-0 w-[25%] h-[65%] rounded-[8%]"
                src={image}
                alt="Brenda's profile"
                animate={{
                    y: ["0px", "-2px", "0px", "2px", "0px"], // Movimiento: arriba-abajo-centro
                }}
                transition={{
                    duration: 2.5, // Más tiempo = más lento
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            />
        
            <div className="relative top-[-100px] left-[200px] w-[50%]">
                <h1 className='text-3xl font-bold text-[#BCB4FF] p-4'>
                    Hey, I'm {animatedName}!
                    <span className="animate-blink">{cursor}</span>
                </h1>
                <motion.p
                    className="relative top-10 text-base text-[#FFFEEC]"
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
                    a developer with a preference for back-end in <span className='text-[#CAC426] font-bold'>Java and Node.js,</span>
                    <br />
                    and a deep enthusiasm for <span className='font-medium'>design</span> and <span className='font-medium'>photography.</span>
                </motion.p>
            </div>

            <div className="relative flex justify-center gap-6 top-[50px] left-[-250px] w-[25%]">
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <a 
                        className="social-icon" 
                        href="https://github.com/brendayw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="Github" className='w-8 h-8' />
                    </a>
                </motion.div>
                
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <a
                        className="social-icon" 
                        href="https://linkedin.com/in/brendayw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="Linkedin" className='w-8 h-8'/>
                    </a>
                </motion.div>
                
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <a
                        className="social-icon" 
                        href="mailto:brendayw97@gmail.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={gmail} alt="Gmail" className='w-8 h-8' />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;