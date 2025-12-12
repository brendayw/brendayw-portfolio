import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from '../hooks/useTypewritter';

const iconClasses = {     
    // Iconos personalizados - usar SVG público o alternativas 
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    maven: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg", 
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    postgre: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    junit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    restapi: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    jwt: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
    dashboards: "https://cdn-icons-png.flaticon.com/512/1828/1828643.png",
    weatherapi: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
    twilio: "https://cdn.worldvectorlogo.com/logos/twilio.svg",
    scheduler: "https://cdn-icons-png.flaticon.com/512/747/747310.png" 
};


const projects = [
    {   id: "001", 
        name: "BankIT", 
        description: "A lightweight Java application that simulates loan repayment plans, calculating monthly payments, total interest, and amortization schedules.", 
        techStack: ["java", "maven", "spring", "junit", "mysql", "jwt"], 
        image: '/projects/nodemo.png', 
        //detailsLink: "/cognicare", 
        // liveLink: "", 
        githubLink: "https://github.com/brendayw/bankIT" 
    },
    {   id: "002", 
        name: "CogniCare", 
        description: "A cognitive health platform with React frontend and Node.js/Express backend, powered by PostgreSQL via Supabase for real-time data.", 
        techStack: ["react", "tailwind", "jwt", "node", "express", "postgre", "supabase"], 
        image: "/projects/cognicare-2.png", 
        //detailsLink: "/cognicare", 
        liveLink: "https://cognicare-frontend.vercel.app/", 
        githubLink: "https://github.com/brendayw/cognicare-backend" 
    },
    {   id: "003", 
        name: "AlertIT", 
        description: "It is a Java-based weather alert system that detects heavy rain or strong wind conditions in a specific region of Argentina and automatically sends notifications via WhatsApp.", 
        techStack: ["java", "spring", "weatherapi", "twilio", "scheduler"], 
        image: '/projects/nodemo.png', 
        //detailsLink: "/alertit", 
        // liveLink: "", 
        githubLink: "https://github.com/brendayw/AlertIT" 
    },
    {   id: "004", 
        name: "Sudoku Solver", 
        description: "A GUI-based Sudoku solver built with Java and Swing, featuring both manual puzzle input and automatic solving via a backtracking algorithm. ", 
        techStack: ["java"], 
        image: '/projects/nodemo.png', 
        //detailsLink: "/sudokusolver",
        // liveLink: "",
        githubLink: "https://github.com/brendayw/SudokuSolver" 
    },
    // {
    //     id: "005",
    //     name: "Juli G - Artist Landing Page",
    //     description: "A sleek, responsive React landing page for musician Juli G, designed to showcase his work and connect with fans.",
    //     techStack: ["react", "tailwind" ],
    //     image: '/projects/julig-2.png',
    //     liveLink: "https://juligpop.netlify.app/",
    //     githubLink: "https://github.com/brendayw/julig-pop"
    // }
]

const ProjectsCard = () => {
    const { text: animatedName, cursor } = useTypewriter('Projects', {
        delay: 100,
        infinite: false,
    });

    return (
        <section className='w-full py-14 px-2 sm:px-6 lg:px-8 space-y-8 md:space-y-12 mb-8 md:mb-0'>

            <div className='w-full max-w-7xl mx-auto'>
                <h1 className='text-2xl sm:text-3xl font-bold text-[#BCB4FF]'>
                    {animatedName}
                    <span className="animate-blink">{cursor}</span>
                </h1>

                <motion.p
                    className="relative top-2 text-sm sm:text-base text-[#FFFEEC]"
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
                    {/* glow violeta */}
                    <div className="absolute inset-0 bg-[#BCB4FF] opacity-5 blur-lg rounded-2xl -z-10"></div>
                                     
                    <div className='flex flex-col gap-8'>
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-start p-2 gap-6">
                                {/* Imagen */}
                                <motion.div
                                    className="w-full md:w-[400px] h-[225px] opacity-75 hover:opacity-100 rounded-lg shadow-lg overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover rounded-md shadow-md"
                                    />
                                </motion.div>

                                {/* Contenido principal */}
                                <div className="flex flex-col max-w-[500px] flex-grow">
                                    <h3 className="text-xl sm:text-2xl font-medium text-[#CAC426]">
                                        {project.name}
                                    </h3>
                                    <p className="mt-2 text-sm sm:text-base text-[#FFFEEC]">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-2 mt-2 flex-wrap w-full md:w-auto justify-center md:justify-start">
                                        {project.techStack.map((tech, idx) => {
                                        const icon = iconClasses[tech];
                                        const isDevicon = typeof icon === "string" && icon.startsWith("devicon");

                                        return (
                                            <React.Fragment key={idx}>
                                                {/* Mobile: solo ícono */}
                                                <div className="w-9 h-9 mt-2 flex items-center justify-center rounded-full bg-[#222223] md:hidden" title={tech}>
                                                    {isDevicon ? (
                                                        <i className={`${icon} block m-auto`} style={{ fontSize: '16px' }}></i>
                                                    ) : (
                                                        <img src={icon} alt={tech} className="w-5 h-5 object-contain"/>
                                                    )}
                                                </div>

                                                {/* Desktop: ícono + texto */}
                                                <div className="hidden md:flex items-center gap-2 border border-[#CAC426] rounded-lg w-28 h-8 whitespace-nowrap px-4 py-1">
                                                    {isDevicon ? (
                                                        <i className={`${icon} text-sm`} title={tech}></i>
                                                    ) : (
                                                        <img src={icon} alt={tech} className="w-5 h-5 object-contain" title={tech}/>
                                                    )}
                                                    <span className="text-xs text-white truncate">{tech}</span>
                                                </div>
                                            </React.Fragment>
                                        );
                                        })}
                                    </div>
                                </div>

                                {/* Botones en columna a la derecha */}
                                <div className="flex flex-row md:flex-col gap-3 mt-2 md:mt-0 justify-center items-center flex-wrap w-full md:w-auto">
                                    {project.detailsLink && project.detailsLink.trim() !== "" && (
                                        <a
                                            href={project.detailsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 md:w-[125px] h-[35px] flex items-center justify-center text-xs sm:text-sm bg-[#CAC426] text-[#222223] font-medium rounded-2xl hover:text-[#FFFEEC] transition-colors"
                                        >
                                            More details
                                        </a>
                                    )}

                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 md:w-[125px] h-[35px] flex items-center justify-center text-xs sm:text-sm bg-[#222223] text-[#CAC426] font-medium rounded-2xl hover:text-[#FFFEEC] transition-colors"
                                    >
                                        GitHub Repo
                                    </a>

                                    {project.liveLink && project.liveLink.trim() !== "" && (
                                        <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 md:w-[125px] h-[35px] flex items-center justify-center text-xs sm:text-sm bg-[#BCB4FF] text-[#222223] font-medium rounded-2xl hover:text-[#FFFEEC] transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                    )}
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