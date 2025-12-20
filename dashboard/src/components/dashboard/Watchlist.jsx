import { useState } from "react";
import { watchlist } from "../../data.js";
import BuySellPopUp from "./BuySellPopUp.jsx";

function Watchlist() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedStock, setSelectedStock] = useState(null);
    const [action, setAction] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastData, setToastData] = useState(null);

    const handleBuySellClick = (stock, actionType) => {
        setSelectedStock(stock);
        setAction(actionType);
        setShowModal(true);
        setHoveredIndex(null);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedStock(null);
        setAction("");
    };

    const handleOrderSuccess = (orderData) => {
        setToastData(orderData);
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <>
            {showToast && toastData && (
                <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto z-50 animate-fade-in">
                    <div className="bg-green-500 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 w-full sm:min-w-[300px] sm:max-w-md">
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm sm:text-base">
                                Order Placed Successfully!
                            </p>
                            <p className="text-xs sm:text-sm text-green-100 truncate">
                                {toastData.action} {toastData.quantity}{" "}
                                {toastData.quantity === 1 ? "share" : "shares"}{" "}
                                of {toastData.stock.name}
                            </p>
                        </div>
                    </div>
                </div>
            )}

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

                            {hoveredIndex === index && (
                                <div className="absolute inset-0 bg-transparent border-l-4 border-blue-500 flex items-center justify-end z-10 ">
                                    <div className="flex gap-2 w-50 bg-blue-50 h-full justify-around items-center">
                                        <button
                                            onClick={() =>
                                                handleBuySellClick(item, "Buy")
                                            }
                                            className="text-xs sm:text-sm font-medium bg-blue-400 hover:bg-blue-500 transition-colors w-15 h-7 rounded cursor-pointer"
                                        >
                                            Buy
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleBuySellClick(item, "Sell")
                                            }
                                            className="text-xs sm:text-sm font-medium bg-red-400 hover:bg-red-500 transition-colors w-15 h-7 rounded cursor-pointer"
                                        >
                                            Sell
                                        </button>
                                        <button className="text-xs sm:text-sm font-medium bg-gray-500 hover:bg-gray-600 transition-colors w-15 h-7 rounded cursor-pointer">
                                            Chart
                                        </button>
                                        <button className="text-xs sm:text-sm font-medium bg-gray-500 hover:bg-gray-600 transition-colors w-15 h-7 rounded cursor-pointer">
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

            {showModal && (
                <BuySellPopUp
                    stock={selectedStock}
                    action={action}
                    onClose={handleCloseModal}
                    onOrderSuccess={handleOrderSuccess}
                />
            )}
        </>
    );
}

export default Watchlist;
