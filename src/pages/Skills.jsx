import { motion } from "framer-motion";
import TechStack from '../components/TechStack';

const Skills = () => {
    return (
        <motion.section 
            id="skills" 
            className='w-full'
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <TechStack />
        </motion.section >
    );
}

export default Skills;