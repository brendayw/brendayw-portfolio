import React from 'react';
import { motion } from "framer-motion";
import { useTypewriter } from '../hooks/useTypewritter';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
    const { text: animatedName, cursor } = useTypewriter('Projects', {
        delay: 100,
        infinite: false,
    });

    return (
        <div className='w-full'>
            <h1 className='text-xl font-bold text-[#BCB4FF]'>
                {animatedName}
                <span className="animate-blink">{cursor}</span>
            </h1>
            <motion.p
                className="relative top-2 text-base text-[#FFFEEC]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    damping: 10, 
                    stiffness: 100,
                    delay: 0.3,
                    duration: 0.9
                }}
            >
                Some of the work I've done.
            </motion.p>
            <ProjectsCard />
            
        </div>
    );
}

export default Projects;