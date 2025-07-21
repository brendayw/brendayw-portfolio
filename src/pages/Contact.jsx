import React from 'react';
import { useTypewriter } from '../hooks/useTypewritter';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const { text: animatedName, cursor } = useTypewriter('touch!', {
        delay: 100,
        infinite: false,
    });

     return (
        <div className='w-full'>
            <h1 className='text-xl font-bold text-[#BCB4FF]'>
                Let's get in {animatedName}
                <span className="animate-blink">{cursor}</span>
            </h1>
            <ContactForm />
        </div>
    );
}

export default Contact;