import React from "react";
import { Link } from "react-router";

const DASHBOARD_URL =
    import.meta.env.VITE_DASHBOARD_URL ||
    "https://dheeraj-goswami-zerodha-dashboard.netlify.app";

function OpenAccount() {
    const handleSignupRedirect = () => {
        window.location.href = `${DASHBOARD_URL}/signup`;
    };

    return (
        <>
            <div className="open-account flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-3xl text-center space-y-4 sm:space-y-5 md:space-y-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                        Open a Zerodha Account
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
                        Modern platforms and apps, ₹0 investments, and flat ₹20
                        intraday and F&O trades
                    </p>
                    <button
                        type="button"
                        onClick={handleSignupRedirect}
                        className="px-8 py-2 bg-[rgb(56,126,209)] hover:bg-[rgb(46,106,189)] active:bg-[rgb(36,96,169)] text-white text-base sm:text-lg md:text-xl font-medium rounded shadow-md hover:shadow-lg transition-all duration-200 mt-2"
                    >
                        Sign Up for Free
                    </button>
                </div>
            </div>
        </>
    );
}

export default OpenAccount;
