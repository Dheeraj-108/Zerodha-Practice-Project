import { useState } from "react";
import { watchlist } from "../../data.js";

function Watchlist() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <div className="watchlist w-full border-r border-gray-400 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] flex flex-col">
                <div className="watchlist-title border-b border-t border-gray-400">
                    <input
                        type="search"
                        className="w-full outline-none py-2 px-2 sm:px-3 text-sm placeholder:text-xs sm:placeholder:text-sm"
                        placeholder="Search eg: gold, infy, tcs etc"
                    />
                </div>
                <div className="watchlist-items overflow-y-auto flex-1">
                    {watchlist.map((item, index) => (
                        <div
                            key={index}
                            className="watchlist-item relative flex justify-between items-center py-2 px-2 sm:px-3 border-b border-gray-400 hover:bg-gray-50 transition-colors"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Original content */}
                            <p className="text-sm font-medium truncate mr-2">
                                {item.name}
                            </p>
                            <div className="flex gap-2 sm:gap-6 items-center shrink-0">
                                <p
                                    className={
                                        item.percent.includes("-")
                                            ? "text-xs sm:text-sm text-red-600"
                                            : "text-xs sm:text-sm text-green-600"
                                    }
                                >
                                    {item.percent}
                                </p>
                                <p className="text-xs sm:text-sm font-semibold">
                                    {item.price}
                                </p>
                            </div>

                            {/* Hover overlay component */}
                            {hoveredIndex === index && (
                                <div className="absolute inset-0 bg-transparent border-l-4 border-blue-500 flex items-center justify-end z-10 ">
                                    <div className="flex gap-2 w-50 bg-blue-50 h-full justify-around items-center">
                                        <button className="text-xs sm:text-sm font-medium bg-blue-400 transition-colors w-15 h-7 rounded cursor-pointer">
                                            Buy
                                        </button>
                                        <button className="text-xs sm:text-sm font-medium bg-red-400 transition-colors w-15 h-7 rounded cursor-pointer">
                                            Sell
                                        </button>
                                        <button className="text-xs sm:text-sm font-medium bg-gray-500 transition-colors w-15 h-7 rounded cursor-pointer">
                                            Chart
                                        </button>
                                        <button className="text-xs sm:text-sm font-medium bg-gray-500 transition-colors w-15 h-7 rounded cursor-pointer">
                                            Info
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="watchlist-footer border-t border-gray-400">
                    <button className="w-full py-2 sm:py-3 px-3 text-sm sm:text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer">
                        + Add to Watchlist
                    </button>
                </div>
            </div>
        </>
    );
}

export default Watchlist;
