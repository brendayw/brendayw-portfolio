import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../../Title.jsx";

const CognicareDetails = () => {
    const [activeCircle, setActiveCircle] = useState(null);
    
    return (
        <section className="w-full py-16 sm:px-6 lg:px-8 space-y-8 md:space-y-12 mb-8 md:mb-0">

            <div className="relative flex items-center justify-center h-screen w-full">
        
                {/* CONTENEDOR PRINCIPAL DE TODOS LOS CÍRCULOS */}
                <motion.div 
                    className="absolute"
                    animate={{
                        x: activeCircle === 2 ? 45 : (activeCircle === 1 || activeCircle === 3) ? -300 : 0
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 40 }}
                >

                    {/* CONTENEDOR DEL CÍRCULO 1 */}
                    <motion.div
                        className="absolute translate-x-[-300px] translate-y-[-120px] flex flex-col items-center"
                        whileHover="hovered"
                        initial="initial"
                        animate={activeCircle === 1 ? "hovered" : "initial"}
                        onHoverStart={() => setActiveCircle(1)}
                        onHoverEnd={() => setActiveCircle(null)}
                    >

                        {/* CÍRCULO 1*/}
                        <motion.div
                            className="w-[250px] h-[250px] bg-[#BCB4FF] rounded-full"
                            variants={{
                                initial: { scale: 1, zIndex: 0 },
                                hovered: { scale: 1.1, zIndex: 1 }
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                            
                        <motion.div 
                            className="absolute !translate-x-[475px] translate-y-[0px] drop-shadow-lg"
                            animate={{
                                opacity: activeCircle === null || activeCircle === 1 ? 1 : 0,
                                scale: activeCircle === null || activeCircle === 1 ? 1 : 0.8
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <Title titulo="Key features" className="text-[28px]" />
                        </motion.div>

                        {/* TEXTO 1*/}
                        <motion.div
                            className="w-[600px] text-left text-white font-light p-2 rounded-lg pointer-events-none"
                            variants={{
                                initial: { opacity: 0, y: 10 },
                                hovered: { opacity: 1, y: -200, x: 525 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            
                            <ul className="space-y-1 list-disc">
                                <li>Complete Patient Lifecycle Management – Intake, diagnosis, treatment tracking, and discharge.</li>
                                <li>Session & Assessment Tracking – Structured logging of clinical sessions and evaluations.</li>
                                <li>Secure Document Management – PDF/DOCX/JPG upload and storage via Supabase.</li>
                                <li>Data Visualization Dashboards – Progress charts and patient statistics.</li>
                                <li>Advanced Filtering & Search – Patients by diagnosis, treatment status, and name search.</li>
                                <li>Professional Profile Management – Specialties, availability, and working hours.</li>
                                <li>JWT Authentication & Secure Access – Single professional role with session management.</li>
                                <li>Soft Delete & Data Preservation – Logical deletion across all entities.</li>
                            </ul>
                        </motion.div>

                    </motion.div>

                    {/* CONTENEDOR DEL CÍRCULO 2 */}
                    <motion.div
                        className="absolute translate-x-[-450px] translate-y-[-20px] flex flex-col items-center"
                        whileHover="hovered"
                        initial="initial"
                        animate={activeCircle === 2 ? "hovered" : "initial"}
                        onHoverStart={() => setActiveCircle(2)}
                        onHoverEnd={() => setActiveCircle(null)}
                    >
                        {/* CÍRCULO 2 */}
                        <motion.div
                            className="w-[250px] h-[250px] bg-[#FFFEEC] rounded-full"
                            variants={{
                                initial: { scale: 1, zIndex: 0 },
                                hovered: { scale: 1.1, zIndex: 50 }
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                            
                        {/* SUBTÍTULO 2*/}
                        <motion.div 
                            className="absolute !translate-x-[-350px] translate-y-[10px] drop-shadow-lg"
                            animate={{
                                opacity: activeCircle === null || activeCircle === 2 ? 1 : 0,
                                scale: activeCircle === null || activeCircle === 2 ? 1 : 0.8
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <Title titulo="Tech stack" className="text-[25px] !text-[#BCB4FF]"/>
                        </motion.div>

                        {/* TEXTO 2*/}
                        <motion.div
                            className="space-y-2 w-[600px] text-center text-white font-light p-4 rounded-lg pointer-events-none"
                            variants={{
                                initial: { opacity: 0, y: 10 },
                                hovered: { 
                                    opacity: 1, 
                                    y: -200, 
                                    x: activeCircle === 2 ? -355 : -350 
                                }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <p>React 18 with Vite, React Router v6, Material-UI</p>
                            <p>Axios for API requests</p>
                            <p>Tailwind CSS for utility classes</p>
                            <p>MUI X & Charts.js for data visualization</p>
                            <p>Node.js with Express.js</p>
                            <p>PostgreSQL via Supabase</p>
                            <p>JWT tokens with bcrypt hashing</p>
                            <p>Multer middleware for uploads</p>
                            <p>CORS, helmet, express-rate-limit</p>
                            <p>Vercel for hosting both frontend and backend</p>
                        </motion.div>

                    </motion.div>

                    {/* CONTENEDOR DEL CÍRCULO 3 */}
                    <motion.div
                        className="absolute translate-x-[-300px] translate-y-[100px] flex flex-col items-center"
                        whileHover="hovered"
                        initial="initial"
                        animate={activeCircle === 3 ? "hovered" : "initial"}
                        onHoverStart={() => setActiveCircle(3)}
                        onHoverEnd={() => setActiveCircle(null)}
                    >
                        {/* CÍRCULO 3 */}
                        <motion.div
                            className="w-[250px] h-[250px] bg-[#CAC426] rounded-full"
                            variants={{
                                initial: { scale: 1, zIndex: 0 },
                                hovered: { scale: 1.1, zIndex: 50 }
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                            
                        {/* SUBTÍTULO 3*/}
                        <motion.div 
                            className="absolute !translate-x-[450px] !translate-y-[-25px] drop-shadow-lg"
                            animate={{
                                opacity: activeCircle === null || activeCircle === 3 ? 1 : 0,
                                scale: activeCircle === null || activeCircle === 3 ? 1 : 0.8
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <Title titulo="Challenges & learnings" className="text-[25px] text-[#FFFEEC]" />
                        </motion.div>

                        {/* TEXTO */}
                        <motion.div
                            className="w-[700px] text-left text-white font-light p-4 rounded-lg pointer-events-none"
                            variants={{
                                initial: { opacity: 0, y: 10 },
                                hovered: { opacity: 1, y: -250, x: 550 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <p>Throughout this project, I learned to:</p>
                            <ul className="list-disc pl-4">
                                <li>Developed custom hooks for consistent data fetching across multiple entities.</li>
                                <li>Implemented Multer middleware with validation for clinical documents.</li>
                                <li>Created efficient synchronization between frontend and backend.</li>
                                <li>Built adaptive charts for different screen sizes.</li>
                                <li>Designed secure token handling for professional-only access.</li>
                                <li>Structured PostgreSQL schemas for healthcare workflows with data isolation per professional.</li>
                                <li>Balanced clinical functionality with intuitive navigation for professionals.</li>
                                <li>Implemented consistent logical deletion patterns preserving data relationships.</li>
                                <li>Ensured each professional only accesses their own patients and records.</li>
                            </ul>
                            
                        </motion.div>

                    </motion.div>
                    
                </motion.div>
                
            </div>


        </section>
    )
}

export default CognicareDetails;