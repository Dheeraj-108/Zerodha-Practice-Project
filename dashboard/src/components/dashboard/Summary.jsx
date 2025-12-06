function Summary() {
    return (
        <>
            <div className="summary mx-3 sm:mx-5 my-6 sm:my-10">
                <div className="user-name border-b border-gray-400">
                    <p className="text-lg sm:text-xl font-medium py-4 sm:py-5">
                        Welcome User!
                    </p>
                </div>

                <div className="equity my-10 sm:my-20">
                    <h1 className="text-lg sm:text-xl font-medium mb-4 sm:mb-5">
                        Equity
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
                        <div className="equity-left sm:pr-8 md:pr-16 lg:pr-24 sm:border-r border-gray-400">
                            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-1">
                                34.6k
                            </p>
                            <p className="text-sm sm:text-base text-gray-600">
                                Margin Available
                            </p>
                        </div>

                        <div className="equity-right sm:pl-8 md:pl-16 lg:pl-24">
                            <p className="text-sm sm:text-base mb-2">
                                Margin Used:{" "}
                                <span className="text-gray-500">0</span>
                            </p>
                            <p className="text-sm sm:text-base">
                                Opening Balance:{" "}
                                <span className="text-gray-500">5,000</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="holdings my-10 sm:my-20">
                    <h1 className="text-lg sm:text-xl font-medium mb-4 sm:mb-5">
                        Holdings
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
                        <div className="holdings-left sm:pr-8 md:pr-16 lg:pr-24 sm:border-r border-gray-400">
                            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-1">
                                34.6k
                            </p>
                            <p className="text-sm sm:text-base text-gray-600">
                                Profit/Loss
                            </p>
                        </div>

                        <div className="holdings-right sm:pl-8 md:pl-16 lg:pl-24">
                            <p className="text-sm sm:text-base mb-2">
                                Current Value:{" "}
                                <span className="text-gray-500">0</span>
                            </p>
                            <p className="text-sm sm:text-base">
                                Investment:{" "}
                                <span className="text-gray-500">5,000</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Summary;
