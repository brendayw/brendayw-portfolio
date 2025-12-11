import Title from "../../Title.jsx"
import phonesProjectsOne from "../../../assets/projects-img/phones.png";
import phonesProjectsTwo from "../../../assets/projects-img/phones2.png";
import phonesProjectsThree from "../../../assets/projects-img/phones3.png";
import phonesProjectsFour from "../../../assets/projects-img/phones4.png";

const CognicareSummary = () => {
    return (
        <section className="w-full py-16 sm:px-6 lg:px-8 space-y-8 md:space-y-12 mb-8 md:mb-0">
            <div className="grid grid-cols-2">
                <div className="w-[600px] flex flex-col justify-items text-left">

                    <div className="pb-14">
                        <Title titulo="Cognicare" />
                    </div>

                    <p>
                        CogniCare is a comprehensive clinical management platform designed for mental health professionals to optimize patient lifecycle management. The system digitizes clinical workflows—from intake to discharge—reducing administrative work and improving information organization.
                        <br></br>
                        <br></br>
                        Through data visualization and secure documentation, CogniCare transforms manual processes into an integrated ecosystem for efficient patient care. The platform enhances daily operations while supporting clinical decisions with organized patient histories and progress insights.
                    </p>

                    <div className="flex flex-row gap-6">
                        <a
                            href="https://github.com/brendayw/bankIT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[125px] h-[35px] flex items-center justify-center text-xs sm:text-sm bg-[#CAC426] text-[#222223] font-medium rounded-2xl mt-16 py-1 px-3 sm:px-4 hover:text-[#FFFEEC] transition-colors"
                        >
                            GitHub Repo
                        </a>

                        <a
                            href="https://cognicare-frontend.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[125px] h-[35px] flex items-center justify-center text-xs sm:text-sm bg-[#BCB4FF] text-[#222223] font-medium rounded-2xl mt-16 py-1 px-3 sm:px-4 hover:text-[#FFFEEC] transition-colors"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="w-[500px] text-right ml-20">

                    <div className="flex flex-row m-6">
                        <img
                            src={phonesProjectsOne}
                            alt="BankIT Login"
                            className="w-[250px] h-[300px] rotate-6 rounded-md"
                        />

                        <img
                            src={phonesProjectsTwo}
                            alt="BankIT Login"
                            className="w-[250px] h-[300px] rotate-6 rounded-md"
                        />

                        <img
                            src={phonesProjectsThree}
                            alt="BankIT Login"
                            className="w-[250px] h-[300px] rotate-6 rounded-md"
                        />

                        <img
                            src={phonesProjectsFour}
                            alt="BankIT Login"
                            className="w-[250px] h-[300px] rotate-6 rounded-md"
                        />
                            
                        
                    </div>

                </div>

            </div>
        </section>
    )
}

export default CognicareSummary;