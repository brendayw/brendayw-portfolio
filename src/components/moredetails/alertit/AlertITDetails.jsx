import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../../Title.jsx";

const AlertITDetails = () => {
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
                                <li>SMN-based alert classification: Implements Green/Yellow/Orange/Red alert levels using official meteorological thresholds.</li>
                                <li>External API integration: Fetches real-time weather data from WeatherAPI as an alternative to unavailable SMN APIs.</li>
                                <li>Intelligent condition analysis: Processes meteorological data against established thresholds for various weather phenomena.</li>
                                <li>Automated monitoring: Continuous scheduled checks using Spring Scheduler without manual intervention.</li>
                                <li>Multi-channel notifications: Primary alert delivery via WhatsApp using Twilio API.</li>
                                <li>Geolocation support: Address-to-coordinate conversion for precise weather monitoring.</li>
                                <li>Modular architecture: Hexagonal design supporting testing and containerization (Docker pending).</li>
                                <li>Documented the API endpoints using SpringDoc OpenAPI (Swagger UI).</li>               
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
                            <p>Java 17+ with Spring Boot framework</p>
                            <p>WebClient for reactive API consumption (WeatherAPI)</p>
                            <p>Spring Scheduler for automated task execution</p>
                            <p>Twilio WhatsApp API for notification delivery</p>
                            <p>Springdoc OpenAPI for API documentation (Swagger UI)</p>
                            <p>Maven for dependency management</p>
                            <p>Docker for containerization (pending implementation)</p>
                            <p>Automated testing suite (pending completion)</p>
                            
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
                                hovered: { opacity: 1, y: -250, x: 500 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <p>Throughout this project, I learned to:</p>
                            <ul className="space-y-1 list-disc pl-6">
                                <li>Implementing SMN's alert logic using WeatherAPI data as the primary source.</li>
                                <li>Adapting and applying SMN's meteorological thresholds to WeatherAPI's data structure.</li>
                                <li>Developing algorithms to categorize conditions into appropriate color-coded alert levels.</li>
                                <li>Coordinating data fetching, analysis, and notification delivery in a reliable pipeline.</li>
                                <li>Handling API failures, data inconsistencies, and service interruptions gracefully.</li>
                                <li>Applying hexagonal architecture for maintainability and testability.</li>
                                <li>Mastering third-party API consumption patterns and response handling.</li>
                                <li>Implementing reliable cron-based monitoring systems.</li>
                            </ul>
                            
                        </motion.div>

                    </motion.div>
                    
                </motion.div>
                
            </div>


        </section>
    )
}

export default AlertITDetails;