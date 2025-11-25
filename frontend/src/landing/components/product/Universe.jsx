function Universe() {
    return (
        <>
            <div className="universe px-4 py-8 md:py-12">
                <div className="universe-heading text-center mx-auto max-w-3xl px-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">The Zerodha Universe</h2>
                    <p className="text-gray-700 py-3 md:py-5 text-base md:text-lg">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className="universe-grid w-full md:w-[85%] lg:w-[75%] xl:w-[70%] mx-auto my-8 md:my-12 lg:my-20">
                    <div className="universe-grid-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        <div className="flex flex-col items-center">
                            <img src="./universe1.png" alt="Asset management" className="w-32 md:w-40 lg:w-44 mx-auto" />
                            <p className="text-sm md:text-base text-gray-600 max-w-xs text-center mx-auto py-4 md:py-5">
                                Our asset management venture
                                that is creating simple and transparent index
                                funds to help you save for your goals.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="./universe2.svg" alt="Options trading platform" className="w-32 md:w-40 lg:w-44 mx-auto" />
                            <p className="text-sm md:text-base text-gray-600 max-w-xs text-center mx-auto py-4 md:py-5">
                                Options trading platform that lets you
                                create strategies, analyze positions, and examine
                                data points like open interest, FII/DII, and more.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="./universe3.svg" alt="Investment research platform" className="w-32 md:w-40 lg:w-44 mx-auto" />
                            <p className="text-sm md:text-base text-gray-600 max-w-xs text-center mx-auto py-4 md:py-5">
                                Investment research platform
                                that offers detailed insights on stocks,
                                sectors, supply chains, and more.
                            </p>
                        </div>
                    </div>

                    <div className="universe-grid-bottom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8 lg:mt-10">
                        <div className="flex flex-col items-center">
                            <img src="./universe4.png" alt="Systematic trading platform" className="w-32 md:w-40 lg:w-44 mx-auto" />
                            <p className="text-sm md:text-base text-gray-600 max-w-xs text-center mx-auto py-4 md:py-5">
                                Systematic trading platform
                                that allows you to create and backtest
                                strategies without coding.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="./universe5.png" alt="Thematic investing platform" className="w-32 md:w-40 lg:w-44 mx-auto" />
                            <p className="text-sm md:text-base text-gray-600 max-w-xs text-center mx-auto py-4 md:py-5">
                                Thematic investing platform
                                that helps you invest in diversified
                                baskets of stocks on ETFs.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="./universe6.png" alt="Insurance advisory" className="w-32 md:w-40 lg:w-44 mx-auto" />
                            <p className="text-sm md:text-base text-gray-600 max-w-xs text-center mx-auto py-4 md:py-5">
                                Personalized advice on life
                                and health insurance. No spam
                                and no mis-selling.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Universe