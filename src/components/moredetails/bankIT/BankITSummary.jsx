import Title from "../../Title.jsx"
import phoneProjectsOne from "../../../assets/projects-img/phone1.png";
import phoneProjectsTwo from "../../../assets/projects-img/phone2.png";

const BankITSummary = () => {
    return (
        <section className="w-full py-16 sm:px-6 lg:px-8 space-y-8 md:space-y-12 mb-8 md:mb-0">
            <div className="grid grid-cols-2">
                <div className="w-[600px] flex flex-col justify-items text-left">

                    <div className="pb-14">
                        <Title titulo="BankIT" />
                    </div>

                    <p>
                        BankIT is a Java application that allows users to create a client, accounts and simulate loan repayment plans. 
                        The system calculates monthly installments, total interest, and generates amortization schedules.
                        <br></br>
                        <br></br>
                        Built with Spring Boot, it follows a modular architecture and includes automated tests with JUnit and Mockito to ensure system reliability.
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

                <div className="w-[500px] text-right ml-20">

                    <div className="flex flex-row rotate-12 m-6">
                        <img
                            src={phoneProjectsOne}
                            alt="BankIT Login"
                            className="w-[180px] h-[370px] object-cover rounded-md mr-8"
                        />
                            
                        <img
                            src={phoneProjectsTwo}
                            alt="BankIT main"
                            className="w-[180px] h-[380px] object-cover rounded-md ml-4"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default BankITSummary;