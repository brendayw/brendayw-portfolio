import BankITBoard from "../../components/moredetails/bankIT/BankITBoard";
import AlertITDetails from "../../components/moredetails/alertit/AlertITDetails";
import AlertITSummary from "../../components/moredetails/alertit/AlertITSummary";

const AlertIT = () => {
    return (
        <div> 
            <section id="alertit">
                <AlertITSummary />
                <AlertITDetails />
                <BankITBoard />
            </section>
        </div>
    )
}

export default AlertIT;