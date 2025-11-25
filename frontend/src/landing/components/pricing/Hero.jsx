function Hero() {
    return (
        <>
            <div className="pricing-hero px-4 sm:px-6 lg:px-8">
                <div className="hero-upper text-center mx-auto my-10 sm:my-16 lg:my-20">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold py-3 sm:py-5">
                        Charges
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                        List of all charges and taxes
                    </p>
                </div>

                <div className="hero-lower flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 lg:gap-16 my-10 sm:my-16 lg:my-20 max-w-7xl mx-auto">
                    <div className="w-full max-w-xs sm:max-w-sm md:w-80 text-center">
                        <img
                            src="./zero-image.svg"
                            alt="Free Equity Delivery"
                            className="w-2/3 sm:w-3/4 mx-auto mb-4"
                        />
                        <h1 className="text-xl sm:text-2xl font-semibold mb-3">
                            Free Equity Delivery
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4 md:px-0">
                            All equity delivery investments (NSE, BSE), are
                            absolutely free — ₹ 0 brokerage.
                        </p>
                    </div>
                    <div className="w-full max-w-xs sm:max-w-sm md:w-80 text-center">
                        <img
                            src="./twenty-image.svg"
                            alt="Intraday and F&O trades"
                            className="w-2/3 sm:w-3/4 mx-auto mb-4"
                        />
                        <h1 className="text-xl sm:text-2xl font-semibold mb-3">
                            Intraday and F&O trades
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4 md:px-0">
                            Flat ₹ 20 or 0.03% (whichever is lower) per executed
                            order on intraday trades across equity, currency,
                            and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>
                    <div className="w-full max-w-xs sm:max-w-sm md:w-80 text-center">
                        <img
                            src="./zero-image.svg"
                            alt="Free direct MF"
                            className="w-2/3 sm:w-3/4 mx-auto mb-4"
                        />
                        <h1 className="text-xl sm:text-2xl font-semibold mb-3">
                            Free direct MF
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4 md:px-0">
                            All direct mutual fund investments are absolutely
                            free — ₹ 0 commissions & DP charges.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
