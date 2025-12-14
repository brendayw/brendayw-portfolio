import React from 'react';
import { motion } from "framer-motion";
import AboutMe from '../components/AboutMe.jsx';

const About = () => {
    return (
        <motion.section 
            id="about"
            className='w-full'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <AboutMe />
        </motion.section>
    );
}

export default About;