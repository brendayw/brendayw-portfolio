import { useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from '../hooks/useTypewritter';
import image from '../assets/portraits/1735826457409.jpg';
import imageLila from '../assets/portraits/1735826457409-lila.png';

const AboutMe = () => {
    const [hovered, setHovered] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const { text: animatedName, cursor } = useTypewriter('about me', {
        delay: 100,
        infinite: false,
    });

    return (

        <section className="w-full min-h-screen py-14 px-4 sm:px-6 lg:px-8 mb-8">
            
            {/* Titulo */}
            <div className="w-full max-w-7xl mx-auto mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#BCB4FF] text-left">
                    A little {animatedName}
                    <span className="animate-blink">{cursor}</span>
                </h1>
            </div>

            {/* Desktop - Contenido */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                
                {/* Texto */}
                <motion.div
                    className="hidden md:block w-full max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-justify text-lg">
                        I am a{" "}
                        <span className="text-[#CAC426] font-semibold">
                        Junior Software Developer
                        </span>{" "}
                        with a strong interest in backend development. I work mainly with
                        Java and Spring Boot, building REST APIs and backend logic with a
                        focus on clarity, maintainability, and good practices.
                    </p>

                    <p className="text-justify text-lg">
                        I hold an{" "}
                        <span className="text-[#CAC426] font-semibold">
                        Associate Degree in Programming
                        </span>{" "}
                        and have built backend projects involving data persistence,
                        validations, and business logic. I enjoy understanding how systems
                        work behind the scenes and how different components interact.
                    </p>

                    <p className="text-justify text-lg">
                        My background in usability and user experience allows me to approach
                        development from a user-centered perspective, even when working on
                        backend solutions.
                    </p>

                    <p className="text-justify text-lg">
                        I am currently looking for a Junior Backend or Software Developer
                        position where I can continue learning, grow professionally, and
                        contribute to real projects.
                    </p>
                </motion.div>

                {/* Imagen */}
                <motion.div
                    className="hidden md:flex w-full md:w-[350px] md:h-[400px] mx-auto md:mx-0 flex-shrink-0 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div
                        className="relative group"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {/* Borde externo */}
                        <div className="
                            absolute inset-0
                            translate-x-3 translate-y-3
                            border-2 border-[#BCB4FF]
                            rounded-2xl
                            pointer-events-none
                            transition-all duration-300 ease-out
                            group-hover:translate-x-5 group-hover:translate-y-5" />

                        {/* Imagen */}
                        <img
                            src={hovered ? image : imageLila}
                            alt="Brenda's profile"
                            className="relative z-10 md:w-[350px] md:h-[400px] aspect-square object-cover rounded-2xl transition-all duration-300 ease-out group-hover:-translate-x-4 group-hover:-translate-y-4 border border-transparent"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Mobile Flip */}
            <div className="md:hidden w-full flex justify-center mt-2">
                <div 
                    className="w-full max-w-md perspective cursor-pointer"
                    onClick={() => setFlipped(!flipped)}
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        className="relative w-full h-96 rounded-3xl"
                        animate={{ rotateY: flipped ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Front: Texto */}
                        <div className="absolute w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center"
                             style={{ backfaceVisibility: "hidden" }}
                        >
                            <p className="text-justify mb-2">
                                I am a <span className="text-[#CAC426] font-semibold">Junior Software Developer</span> with a strong interest in backend development. I work mainly with Java and Spring Boot, building REST APIs and backend logic with a
                                focus on clarity, maintainability, and good practices.
                            </p>
                            <p className="text-justify mb-2">
                                I hold an <span className="text-[#CAC426] font-semibold">Associate Degree in Programming</span> and have built backend projects involving data persistence,
                                validations, and business logic. I enjoy understanding how systems
                                work behind the scenes and how different components interact.
                            </p>
                            <p className="text-center text-[#BCB4FF] font-medium italic">
                                👆 Peek-a-boo!
                            </p>
                        </div>

                        {/* Back: Imagen */}
                        <div 
                            className="absolute w-full h-full rounded-3xl overflow-hidden"
                            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <img
                                src={hovered ? image : imageLila}
                                alt="Brenda's profile"
                                className="w-full h-full object-cover rounded-3xl border-2 border-[#BCB4FF]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        
    );
}

export default AboutMe;