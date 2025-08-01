import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTypewriter } from '../hooks/useTypewritter';

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
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    if (showSuccess) {
        return (
            <section className='w-full py-16 px-4 space-y-12 text-center'>
                <h1 className='text-xl font-bold text-[#BCB4FF]'>
                    Thanks, I'll get back to you {animatedText}
                    <span className="animate-blink">{messageCursor}</span>
                </h1>
            </section>
        );
    }

    return (
        <section className='w-full py-16 px-2 sm:px-6 lg:px-8 space-y-8'>
            <div className='w-full max-w-7xl mx-auto'>
                <h1 className='text-2xl sm:text-3xl font-bold text-[#BCB4FF]'>
                    Let's get in {animatedName}
                    <span className="animate-blink">{cursor}</span>
                </h1>
            </div>

            {/* Formulario responsive */}
            <form onSubmit={handleSubmit} className='min-h-[400px] grid grid-cols-1 xs:grid-cols-3 gap-4 shadow-lg shadow-[#222223] backdrop-blur-sm bg-[#1E1E1E] p-6 rounded-xl'>
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
            </form>
        </section>
    )
}

export default ContactForm;