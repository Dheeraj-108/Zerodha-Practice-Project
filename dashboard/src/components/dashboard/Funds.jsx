function Funds() {
    return (
        <>
            <div className="funds flex flex-col lg:flex-row p-4 sm:p-6 lg:p-10 gap-6 lg:gap-8">
                <div className="funds-details w-full lg:w-[45%] xl:w-[40%]">
                    <h1 className="text-base sm:text-lg font-semibold py-3 sm:py-5">
                        Equity
                    </h1>
                    <div className="details border border-gray-200 rounded-sm">
                        <ul>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Available
                                </span>
                                <span className="text-gray-500 text-lg sm:text-xl font-semibold">
                                    10000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Used Margin
                                </span>
                                <span className="text-gray-500 text-lg sm:text-xl font-semibold">
                                    10000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Available Cash
                                </span>
                                <span className="text-gray-500 text-lg sm:text-xl font-semibold">
                                    10000
                                </span>
                            </li>
                            <li className="w-[90%] mx-auto border-b border-gray-300"></li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Opening Balance
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Pay In
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    SPAN
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Delivery Margin
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Exposure
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Options Premium
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                            <li className="w-[90%] mx-auto border-b border-gray-300"></li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Collateral {"(Liquid Funds"}
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Collateral {"(Equity"}
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                            <li className="flex justify-between px-3 sm:px-5 py-2">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    Total Collateral
                                </span>
                                <span className="text-gray-500 text-sm sm:text-base font-semibold">
                                    50000
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="funds-functions w-full lg:w-[45%] xl:w-[40%] flex flex-col sm:flex-row justify-between items-center gap-4 py-6 sm:py-10">
                    <p className="text-sm sm:text-base text-center sm:text-left">
                        Instant zero cost fund transfer with UPI
                    </p>
                    <div className="flex gap-2 justify-center">
                        <button className="w-20 sm:w-24 h-9 sm:h-10 rounded-sm text-sm sm:text-base font-semibold bg-blue-400 hover:bg-blue-500 transition-colors">
                            Withdraw
                        </button>
                        <button className="w-20 sm:w-24 h-9 sm:h-10 rounded-sm text-sm sm:text-base font-semibold bg-green-400 hover:bg-green-500 transition-colors">
                            Deposit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Funds;
