import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { useTypewriter } from '../hooks/useTypewritter';
import Location from '../assets/form/location.png';
import Email from '../assets/form/email.png';
import Linkedin from '../assets/form/linkedin.png';
import Github from '../assets/form/github.png';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xeoqevzl");
    const [showSuccess, setShowSuccess] = useState(false);

    const { text: animatedName, cursor } = useTypewriter('touch!', {
        delay: 100,
        infinite: false,
    });

    const { text: animatedText, cursor: messageCursor } = useTypewriter('ASAP!', {
        delay: 100,
        infinite: false,
    });

    useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
            const timer = setTimeout(() => {
                window.location.reload();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    if (showSuccess) {
        return (
            <section className='w-full min-h-screen py-16 px-4 space-y-12 text-center'>
                <h1 className='text-xl font-bold text-[#BCB4FF]'>
                    Thanks, I'll get back to you {animatedText}
                    <span className="animate-blink">{messageCursor}</span>
                </h1>
            </section>
        );
    }

    return (
        <section className='w-full md:min-h-screen flex flex-col justify-center items-center py-8 px-2 sm:px-6 lg:px-8 space-y-6 mb-12 md:mb-0'>
            
            <motion.div
                className='w-full max-w-7xl mx-auto'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h1 className='text-2xl sm:text-3xl font-bold text-[#BCB4FF] text-center md:text-left hover:text-[#CAC426]'>
                    Let's get in {animatedName}
                    <span className="animate-blink">{cursor}</span>
                </h1>
            </motion.div>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
    
                {/* Columna izquierda: parrafo + contacto */}
                <div className="w-[100%] md:w-[80%] flex flex-col gap-6 justify-center">
                    <p className="text-lg text-gray-300 mb-4 text-justify">
                        I’m open to new opportunities and collaborations. 
                        Feel free to reach out anytime! Whether it’s a question, 
                        project proposal, or feedback, I’d love to hear from you.
                    </p>

                    <div className='bg-[#1E1E1E] h-50 p-4 md:p-6 rounded-lg' >
                        <p className="flex gap-4 md:gap-6 items-center text-start md:text-md text-gray-300 p-2">
                            <img src={Email} className='w-5 h-5' />
                            <a href="mailto:brendayw97@gmail.com" className="hover:text-[#CAC426] transition-colors">brendayw97@gmail.com</a>
                        </p>
                        <p className="flex gap-4 md:gap-6 items-center text-start md:text-md text-gray-300 p-2">
                            <img src={Linkedin} className='w-5 h-5'/>
                            <a href="https://www.linkedin.com/in/brendayw/" target="_blank" rel="noopener noreferrer" className="hover:text-[#CAC426] transition-colors">LinkedIn</a>
                        </p>
                    </div>

                    <p className='flex text-sm gap-2 md:gap-4 items-center justify-start italic'>
                        <img src={Location} className='w-6 h-6'/>
                        Bahía Blanca, Buenos Aires, Argentina
                    </p>
                </div>

                {/* Formulario responsive */}
                <motion.form
                    onSubmit={handleSubmit}
                    className='w-full max-w-[600px] min-h-[400px] items-center grid grid-cols-1 xs:grid-cols-3 gap-4 shadow-lg shadow-[#222223] backdrop-blur-sm bg-[#1E1E1E] p-6 rounded-xl'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    
                    {/* Nombre */}
                    <label htmlFor="name" className='text-[#CAC426] text-start font-medium xs:col-span-1'>
                        Full Name:
                    </label>
                    <input
                        className='w-full col-span-2 text-sm text-gray-500 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CAC426] focus:border-[#CAC426]'
                        id="name"
                        type="text" 
                        name="name"
                        required
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="col-span-2"
                    />

                    {/* Email */}
                    <label htmlFor="email" className='text-[#CAC426] text-start font-medium xs:col-span-1'>
                        Email:
                    </label>
                    <input
                        className='w-full col-span-2 text-sm text-gray-500 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CAC426] focus:border-[#CAC426]'
                        id="email"
                        type="email" 
                        name="email"
                        required
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="col-span-2"
                    />

                    {/* Teléfono */}
                    <label htmlFor="telefono" className='text-[#CAC426] text-start font-medium xs:col-span-1'>
                        Phone (optional):
                    </label>
                    <input
                        className='w-full col-span-2 text-sm text-gray-500 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CAC426] focus:border-[#CAC426]'
                        id="telefono"
                        type="tel" 
                        name="telefono"
                    />
                    <ValidationError 
                        prefix="Telefono" 
                        field="telefono"
                        errors={state.errors}
                        className="col-span-2"
                    />

                    {/* Mensaje */}
                    <label htmlFor="message" className='text-[#CAC426] text-start font-medium xs:col-span-1'>
                        Message:
                    </label>
                    <textarea
                        className='w-full col-span-2 h-32 text-sm text-gray-500 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CAC426] focus:border-[#CAC426]'
                        id="message"
                        name="message"
                        required
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="col-span-2"
                    />

                    {/* Botón - Versión responsive */}
                    <div className="xs:col-span-1 xs:col-start-3 col-span-full flex justify-end">
                        <button 
                            type="submit" 
                            disabled={state.submitting} 
                            className='w-full bg-[#CAC426] hover:bg-[#222223] text-[#222223] hover:text-[#CAC426] font-medium rounded-2xl py-2 px-6 transition-colors hover:border-none'
                        >
                            Submit
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    )
}

export default ContactForm;