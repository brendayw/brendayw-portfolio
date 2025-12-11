import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../../Title.jsx";

const SudokuSolverDetails = () => {
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
                                <li>Backtracking Algorithm – Solves any valid Sudoku puzzle using recursive backtracking.</li>
                                <li>Interactive GUI – User-friendly interface built with Java Swing.</li>
                                <li>Manual Board Input – Allows custom puzzle entry cell-by-cell.</li>
                                <li>Preloaded Puzzles – Multiple difficulty levels available.</li>
                                <li>Real-time Validation – Checks for duplicates in rows, columns, and 3×3 subgrids.</li>
                                <li>Reset Functionality – Clear board to start new game instantly.</li>
                                <li>Visual Feedback – Highlights invalid entries and solved cells.</li>          
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
                            <p>Java</p>
                            <p>Swing</p>
                            <p>Recursive Backtracking</p>
                            <p>Object-Oriented Programming</p>
                            <p>IDE (Eclipse/IntelliJ), Java SE</p>
                            
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
                                <li>Implemented efficient backtracking with constraint propagation.</li>
                                <li>Managed UI updates during lengthy solving processes.</li>
                                <li>Created robust validation for Sudoku rules and user inputs.</li>
                                <li>Handled board state preservation during solving and reset operations.</li>
                                <li>Mastered recursive algorithms for combinatorial problem-solving.</li>
                                <li>Balanced algorithmic complexity with intuitive interface design.</li>
                                <li>Implemented graceful failure for unsolvable or invalid puzzles.</li>
                                <li>Optimized algorithm to solve puzzles within seconds.</li>
                            </ul>
                            
                        </motion.div>

                    </motion.div>
                    
                </motion.div>
                
            </div>


        </section>
    )
}

export default SudokuSolverDetails;