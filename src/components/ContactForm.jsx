import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTypewriter } from '../hooks/useTypewritter';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xeoqevzl");
    if (state.succeeded) {
        return <p>Thanks, I'll get back to you ASAP!</p>;
    }

    const { text: animatedName, cursor } = useTypewriter('touch!', {
        delay: 100,
        infinite: false,
    });

    return (
        <section className='w-full py-16 px-4 space-y-12'>
            <h1 className='text-xl font-bold text-[#BCB4FF]'>
                Let's get in {animatedName}
                <span className="animate-blink">{cursor}</span>
            </h1>

            <form onSubmit={handleSubmit} className='min-h-[400px] grid grid-cols-3 gap-4 shadow-lg shadow-[#222223] backdrop-blur-sm bg-[#1E1E1E] p-6 rounded-xl'>
                <label htmlFor="name" className='text-[#CAC426] text-start font-medium col-span-1'>
                    Full Name:
                </label>
                <input
                    className='w-full col-span-2 text-sm text-gray-500 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CAC426] focus:border-[#CAC426]'
                    id="name"
                    type="text" 
                    name="name"
                    required
                />
                <label htmlFor="email" className='text-[#CAC426] text-start font-medium col-span-1'>
                    Email:
                </label>
                <input
                    className='w-full col-span-2 text-sm text-gray-500 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CAC426] focus:border-[#CAC426]'
                    id="email"
                    type="email" 
                    name="email"
                    required
                />
                <label htmlFor="telefono" className='text-[#CAC426] text-start font-medium col-span-1'>
                    Phone (optional):
                </label>
                <input
                    className='w-full col-span-2 text-sm text-gray-500 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CAC426] focus:border-[#CAC426]'
                    id="telefono"
                    type="tel" 
                    name="telefono"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="col-span-2"
                />
                <label htmlFor="message" className='text-[#CAC426] text-start font-medium col-span-1'>
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
                <button 
                    type="submit" 
                    disabled={state.submitting} 
                    className='col-span-1 col-start-3 bg-[#CAC426] hover:bg-[#222223] text-[#222223] hover:text-[#CAC426] font-medium rounded-2xl py-2 px-4 transition-colors hover:border-none'
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default ContactForm;