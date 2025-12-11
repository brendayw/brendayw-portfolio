import Title from "../../Title.jsx"
import phoneProjectsThree from "../../../assets/projects-img/phone3.png";


const AlertITSummary = () => {
    return (
        <section className="w-full py-16 sm:px-6 lg:px-8 space-y-8 md:space-y-12 mb-8 md:mb-0">
            <div className="grid grid-cols-2">
                <div className="w-[600px] flex flex-col justify-items text-left">

                    <div className="pb-12">
                        <Title titulo="AlertIT" />
                    </div>

                    <p>
                        AlertIT is an automated weather alert system that monitors real-time meteorological conditions and sends proactive notifications via WhatsApp. The service implements a color-coded alert classification system (Green, Yellow, Orange, Red) modeled after Argentina's National Meteorological Service (SMN). 
                        <br></br>
                        <br></br>
                        Since the SMN doesn't provide a public API, the system utilizes WeatherAPI to gather weather data and applies SMN's established thresholds for various weather phenomena to determine alert levels. When conditions meet or exceed predefined thresholds for wind, precipitation, or storms, AlertIT automatically generates and dispatches appropriate alerts, enabling users to receive timely warnings about potentially dangerous weather conditions in their area.
                    </p>

                    <a
                        href="https://github.com/brendayw/alertIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[125px] h-[35px] flex items-center justify-center text-xs sm:text-sm bg-[#CAC426] text-[#222223] font-medium rounded-2xl mt-16 py-1 px-3 sm:px-4 hover:text-[#FFFEEC] transition-colors"
                    >
                        GitHub Repo
                    </a>
                    
                </div>

                <div className="w-[500px] text-center ml-40">

                    <div className="flex flex-row rotate-3">
                        <img
                            src={phoneProjectsThree}
                            alt="BankIT Login"
                            className="w-[225px] h-[425px] object-cover rounded-md mr-8"
                        />
                            
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AlertITSummary;