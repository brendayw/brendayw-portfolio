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
        <section id="hero" className='min-h-screen flex flex-col md:flex-row items-center justify-between w-full py-8 md:py-16 px-4 sm:px-6 lg:px-8'>
            
            <motion.div 
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
            </motion.div>

        
            <div className='relative flex flex-col'>
                <div className="relative md:left-20 w-full md:w-[90%] lg:w-[80%] text-center md:text-left mb-12 md:mb-0 md:px-8">
                    <h1 className='text-3xl sm:text-3xl md:text-4xl font-bold text-[#BCB4FF] text-center mb-6'>
                        Hey, I'm {animatedName}!
                        <span className="animate-blink">{cursor}</span>
                    </h1>
                    <motion.p
                        className="text-base sm:text-lg text-[#FFFEEC] text-center leading-relaxed"
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
                        A developer with a preference for back-end in <span className='text-[#CAC426] font-bold'>Java and Node.js</span>, 
                        and a deep enthusiasm for <span className='font-medium'>design</span> and <span className='font-medium'>photography</span>.
                    </motion.p>
                </div>

                {/* Iconos sociales - Responsive */}
                <div className="w-full relative top-[-25px] md:top-10 flex justify-center gap-6 md:gap-8">
                    {[github, linkedin, gmail].map((icon, index) => (
                        <motion.div
                            key={index}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <a 
                                href={
                                    index === 0 ? "https://github.com/brendayw" :
                                    index === 1 ? "https://linkedin.com/in/brendayw" :
                                    "mailto:brendayw97@gmail.com"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-1"
                            >
                                <img 
                                    src={icon} 
                                    alt={index === 0 ? "GitHub" : index === 1 ? "LinkedIn" : "Email"} 
                                    className='w-8 h-8 sm:w-10 sm:h-10'
                                />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;