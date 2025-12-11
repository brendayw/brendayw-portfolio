import SudokuSolverDetails from "../../components/moredetails/sudokusolver/SudokuSolverDetails";
import SudokuSolverSummary from "../../components/moredetails/sudokusolver/SudokuSolverSummary";

const SudokuSolver = () => {
    return (
        <div> 
            <section id="sudokusolver">
                <SudokuSolverSummary />
                <SudokuSolverDetails />

            </section>
        </div>
    )
}

export default SudokuSolver;