import { Link } from "react-router";

function Hero() {
    return (
        <>
            <div className="support-hero px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 w-full pb-5 pt-8 sm:pt-12 md:pt-16 bg-[#f3f3f3]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Support Portal
                    </h1>
                    <Link
                        to="/support"
                        className="bg-[#3e6dcb] font-semibold rounded-md px-4 sm:px-6 py-2 text-white text-sm sm:text-base whitespace-nowrap"
                    >
                        My Tickets
                    </Link>
                </div>

                <div className="search-box pt-6 sm:pt-8 md:pt-10 pb-5">
                    <input
                        type="text"
                        placeholder="🔍 Eg: How do I open my account, How do I activate F&O..."
                        className="w-full h-12 sm:h-14 md:h-16 px-4 sm:px-6 py-2 rounded-sm shadow-md bg-white text-gray-500 text-sm sm:text-base md:text-lg focus:outline-none"
                    />
                </div>
            </div>
        </>
    );
}

export default Hero;
