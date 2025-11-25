
import { Link } from "react-router";

function Team() {
    return (
        <>
            <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 px-4">People</h1>

            <div className="team flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 mx-auto mb-16 md:mb-20 px-4 md:px-8">

                <div className="team-img flex flex-col items-center justify-center w-full sm:w-3/4 md:w-[40%] text-center">
                    <img
                        src="./Dheeraj-Goswami.png"
                        className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover mb-4"
                        alt="Dheeraj Goswami"
                    />
                    <h2 className="text-xl md:text-2xl font-semibold mt-2">Dheeraj Goswami</h2>
                    <p className="text-gray-600 text-sm md:text-base">Founder, CEO</p>
                </div>

                <div className="team-text w-full md:w-[40%] space-y-4 md:space-y-5">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Dheeraj Goswami is the co-founder and CEO of Zerodha Clone. He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Playing basketball is his zen. <br />
                        Connect on <Link to="/" className="text-blue-700 hover:underline">Homepage</Link> / <Link to="/" className="text-blue-700 hover:underline">TradingQnA</Link> / <Link to="/" className="text-blue-700 hover:underline">Twitter</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Team;
