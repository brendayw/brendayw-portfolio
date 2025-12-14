import { motion } from "framer-motion";
import ContactForm from '../components/ContactForm';

const Contact = () => {
     return (
        <motion.section
            id="contact" 
            className='w-full'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <ContactForm />
        </motion.section>
    );
}

export default Contact;