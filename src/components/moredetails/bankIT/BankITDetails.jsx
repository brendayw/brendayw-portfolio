import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../../Title.jsx";

const BankITDetails = () => {
    const [activeCircle, setActiveCircle] = useState(null);
    
    return (
        <section className="w-full py-16 sm:px-6 lg:px-8 space-y-8 md:space-y-12 mb-8 md:mb-0">

            <div className="relative flex items-center justify-center h-screen w-full">
        
                {/* CONTENEDOR PRINCIPAL DE TODOS LOS CÍRCULOS */}
                <motion.div 
                    className="absolute"
                    animate={{
                        x: activeCircle === 2 ? 90 : (activeCircle === 1 || activeCircle === 3) ? -300 : 0
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
                                <li>Developed a REST microservice for loan simulation using Java and Spring Boot.</li>
                                <li>Implemented business logic for amortization and interest calculation within the microservice.</li>
                                <li>Configured data persistence using Spring Data JPA and MySQL.</li>
                                <li>Applied MVC architecture and SOLID principles to ensure maintainability and scalability.</li>
                                <li>Secured API endpoints through authentication and authorization with Spring Security.</li>
                                <li>Created unit and integration tests with JUnit and Mockito to guarantee code quality.</li>
                                <li>Documented the API endpoints using SpringDoc OpenAPI (Swagger UI).</li>
                                <li>Applied Builder and Factory design patterns in entity classes to improve flexibility and readability.</li>
                                <li>Leveraged Lombok to reduce boilerplate code.</li>
                                <li>Used GitHub Actions for continuous integration and automated testing.</li>
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
                            className="w-[600px] text-center text-white font-light p-4 rounded-lg pointer-events-none"
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
                            <p>Java</p>
                            <p>Spring Boot</p>
                            <p>Spring Data JPA</p>
                            <p>Spring Security</p>
                            <p>SpringDoc OpenAPI (Swagger UI)</p>
                            <p>Flyway</p>
                            <p>MySQL</p>
                            <p>Lombok</p>
                            <p>JWT</p>
                            <p>Maven</p>
                            <p>JUnit</p>
                            <p>Mockito</p>
                            <p>H2</p>   
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
                            className="w-[600px] text-left text-white font-light p-4 rounded-lg pointer-events-none"
                            variants={{
                                initial: { opacity: 0, y: 10 },
                                hovered: { opacity: 1, y: -250, x: 500 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <p>Throughout this project, I learned to:</p>
                            <ul className="space-y-1 list-disc pl-6">
                                <li>Structure and modularize a microservice architecture effectively.</li>
                                <li>Apply lambda expressions and Java streams for more concise and efficient logic.</li>
                                <li>Use H2 for in-memory testing environments.</li>
                                <li>Automate the testing pipeline with GitHub Actions CI.</li>
                                <li>Integrate documentation with Swagger/OpenAPI and apply design patterns to improve code flexibility.</li>
                                <li>This project deepened my understanding of backend development with Spring Boot, emphasizing clean architecture, testing, and automation.</li>
                            </ul>
                            
                        </motion.div>

                    </motion.div>
                    
                </motion.div>
                
            </div>


        </section>
    )
}

export default BankITDetails;