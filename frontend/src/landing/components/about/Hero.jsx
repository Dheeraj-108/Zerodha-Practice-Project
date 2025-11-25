
function Hero() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-8 md:py-12 lg:py-16">
                <div className="hero-heading text-center text-gray-700 mb-8 md:mb-12 lg:mb-16 py-8 md:py-12 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 border-b border-gray-300 w-full max-w-7xl">
                    <h1 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold text-center mx-auto leading-relaxed">
                        We pioneered the discount broking model in India.
                        <br />Now, we are breaking ground with our technology.
                    </h1>
                </div>

                <div className="hero-text flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8 lg:gap-12 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="hero-text-left flex-1 space-y-4 md:space-y-5">
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        </p>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>

                    <div className="hero-text-right flex-1 space-y-4 md:space-y-5">
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        </p>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                        </p>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;