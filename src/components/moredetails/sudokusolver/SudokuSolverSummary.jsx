import Title from "../../Title.jsx"
import laptopProjectsOne from "../../../assets/projects-img/png-sudoku.png";

const SudokuSolverSummary = () => {
    return (
        <section className="w-full py-16 sm:px-6 lg:px-8 space-y-8 md:space-y-12 mb-8 md:mb-0">
            <div className="grid grid-cols-2">
                <div className="w-[600px] flex flex-col justify-items text-left">
    
                    <div className="pb-14">
                        <Title titulo="Sudoku Solver" />
                    </div>
    
                    <p>
                        Sudoku Solver is a Java application that solves Sudoku puzzles using backtracking algorithms. 
                        The application features an intuitive graphical interface built with Java Swing, allowing users to input their own puzzles or load predefined configurations. 
                        The system automatically validates each entry according to Sudoku rules (no duplicates in rows, columns, or 3x3 subgrids) and efficiently solves any valid puzzle.
                        <br></br>
                        <br></br>
                        This tool is ideal both for learning about combinatorial problem-solving algorithms and for practical use in solving Sudoku puzzles of varying difficulty levels.
                        The interface provides immediate visual feedback and allows users to reset the board for new challenges.
                    </p>
    
                    <a
                        href="https://github.com/brendayw/bankIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[125px] h-[35px] flex items-center justify-center text-xs sm:text-sm bg-[#CAC426] text-[#222223] font-medium rounded-2xl mt-16 py-1 px-3 sm:px-4 hover:text-[#FFFEEC] transition-colors"
                    >
                        GitHub Repo
                    </a>
                </div>
    
                <div className="w-[5500px] text-right ml-20">
    
                    <div className="flex flex-row m-6">
                        <img
                            src={laptopProjectsOne}
                            alt="BankIT Login"
                            className="w-[550px] h-[325px] object-cover rounded-md"
                        />
                                
                    </div>
    
                </div>
    
            </div>
        </section>
    )
}

export default SudokuSolverSummary;