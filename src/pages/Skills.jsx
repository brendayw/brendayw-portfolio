import React from 'react';
import { useTypewriter } from '../hooks/useTypewritter';
import TechStack from '../components/TechStack';

const Skills = () => {
    const { text: animatedName, cursor } = useTypewriter('Skills', {
            delay: 100,
            infinite: false,
        });
    
    return (
        <div className='w-full'>
            <h1 className='text-xl font-bold text-[#BCB4FF]'>
                {animatedName}
                <span className="animate-blink">{cursor}</span>
            </h1>
            <TechStack />
        </div>
    );
}

export default Skills;