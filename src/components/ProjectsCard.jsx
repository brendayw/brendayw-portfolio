import React from 'react';
import { motion } from "framer-motion";
import { useTypewriter } from '../hooks/useTypewritter';

const projects = [
    {
        id: "001",
        name: "Loan Simulator",
        description: "A lightweight Java application that simulates loan repayment plans, calculating monthly payments, total interest, and amortization schedules.",
        techStack: "Java, Maven, Spring Boot, J Unit 5 & Mockito",
        image: '/projects/cognicare.png',
        // liveLink: "",
        githubLink: "https://github.com/brendayw/LoanSimulator"
    },
    {
        id: "002",
        name: "Sudoku Solver",
        description: "A GUI-based Sudoku solver built with Java and Swing, featuring both manual puzzle input and automatic solving via a backtracking algorithm. ",
        techStack: "Java and Swing",
        image: '/projects/julig.png',
        // liveLink: "",
        githubLink: "https://github.com/brendayw/LoanSimulator"
    },
    {
        id: "003",
        name: "CogniCare (Full-Stack)",
        description: "A cognitive health platform with React frontend and Node.js/Express backend, powered by PostgreSQL via Supabase for real-time data.",
        frontStack: "React.js · TailwindCSS · JWT Auth · Interactive dashboards",
        backStack: "Node.js · Express · REST API · PostgreSQL/Supabase (RLS enabled)",
        image: "/projects/cognicare-2.png",
        liveLink: "https://cognicare-frontend.vercel.app/",
        githubLink: "https://github.com/brendayw/LoanSimulator"
    },
    {
        id: "004",
        name: "Juli G - Artist Landing Page",
        description: "A sleek, responsive React landing page for musician Juli G, designed to showcase his work and connect with fans. Built for performance and aesthetics.",
        techStack: "React.js + Vite, Tailwind CSS",
        image: '/projects/julig-2.png',
        liveLink: "https://juligpop.netlify.app/",
    }
]

const ProjectsCard = () => {
    const { text: animatedName, cursor } = useTypewriter('Projects', {
        delay: 100,
        infinite: false,
    });

    return (
        <section className='w-full py-16 px-4 space-y-12'>

            <div className='w-full max-w-7xl mx-auto'>
                <h1 className='text-xl font-bold text-[#BCB4FF]'>
                    {animatedName}
                    <span className="animate-blink">{cursor}</span>
                </h1>

                <motion.p
                    className="relative top-2 text-base text-[#FFFEEC]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        damping: 10, 
                        stiffness: 100,
                        delay: 0.3,
                        duration: 0.9
                    }}
                >
                    Some of the work I've done.
                </motion.p>
            </div>

            {/* content */}
            <div className='w-full max-w-7xl mx-auto relative'>
                <div>
                    <div className="absolute inset-0 bg-[#BCB4FF] opacity-10 blur-lg rounded-2xl -z-10"></div>
                    
                    <div className="grid grid-cols-4 gap-12">
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <motion.div
                                    className="w-[300px] h-[150px] rounded-lg shadow-lg overflow-hidden border border-[#BCB4FF]"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover rounded-md shadow-md"
                                    />
                                </motion.div>

                                {/* Project Details */}
                                <div className="mt-2 text-center max-w-sm">
                                    <h3 className="text-2xl sm:text-lg font-medium text-[#CAC426]">
                                        {project.name}
                                    </h3>
                                    <p className="mt-2 text-sm sm:text-sm text-[#FFFEEC]">
                                        {project.description}
                                    </p>

                                    {/* Links */}
                                    <div className="mt-4 flex justify-center gap-4">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#BCB4FF] text-[#222223] font-medium rounded-2xl py-1 px-4 hover:text-[#FFFEEC]"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#CAC426] text-[#222223] font-medium rounded-2xl py-1 px-4 hover:text-[#FFFEEC]"
                                        >
                                            GitHub Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsCard;