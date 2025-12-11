import BankITBoard from "../../components/moredetails/bankIT/BankITBoard";
import BankITDetails from "../../components/moredetails/bankIT/BankITDetails";
import BankITSummary from "../../components/moredetails/bankIT/BankITSummary";

const BankIT = () => {
    return (
        <div> 
            <section id="bankit">
                <BankITSummary />
                <BankITDetails />
                <BankITBoard />
            </section>
        </div>
    )
}

export default BankIT;