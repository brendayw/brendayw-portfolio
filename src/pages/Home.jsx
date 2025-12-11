import React from 'react';
import Hero from '../components/Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';

const Home = () => {
    return (
        <section id="home" className='w-full scroll-smooth'>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
        </section>
    );
}

export default Home;