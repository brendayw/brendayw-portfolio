import { motion } from "framer-motion";
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
    return (
        <motion.section 
            id="projects"
            className='w-full'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <ProjectsCard />
        </motion.section>
    );
}

export default Projects;