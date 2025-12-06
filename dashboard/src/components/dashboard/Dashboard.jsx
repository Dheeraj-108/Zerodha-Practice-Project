import { useState } from "react";
import Watchlist from "./Watchlist";
import { Routes, Route } from "react-router";

import Orders from "./Orders";
import Positions from "./Positions";
import Holdings from "./Holdings";
import Funds from "./Funds";
import Summary from "./Summary";
import NotFound from "../NotFound";

function Dashboard() {
    const [isWatchlistVisible, setIsWatchlistVisible] = useState(false);

    const toggleWatchlist = () => {
        setIsWatchlistVisible(!isWatchlistVisible);
    };

    return (
        <>
            <div className="dashboard flex relative">
                <button
                    onClick={toggleWatchlist}
                    className="md:hidden fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
                    aria-label="Toggle Watchlist"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isWatchlistVisible ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {isWatchlistVisible && (
                    <div className="md:hidden fixed left-0 top-14 sm:top-16 w-full sm:w-80 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] z-40 bg-white shadow-lg">
                        <Watchlist />
                    </div>
                )}

                <div className="hidden md:block md:w-1/3 lg:w-1/4">
                    <Watchlist />
                </div>

                <div className="display-page w-full md:flex-1">
                    <Routes>
                        <Route path="/" element={<Summary />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/positions" element={<Positions />} />
                        <Route path="/holdings" element={<Holdings />} />
                        <Route path="/funds" element={<Funds />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
