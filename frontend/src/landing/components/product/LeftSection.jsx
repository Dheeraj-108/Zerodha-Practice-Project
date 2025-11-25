import { Link } from "react-router";

function LeftSection({
    title,
    description,
    imageUrl,
    googlePlay,
    tryDemo,
    learnMore,
}) {
    return (
        <>
            <div className="left-section flex flex-col lg:flex-row justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-16 lg:my-20 max-w-7xl gap-8 lg:gap-12">
                <div className="left-section-image w-full lg:w-2/5 max-w-md lg:max-w-none">
                    <img
                        src={imageUrl}
                        alt="Product Preview"
                        className="w-full h-auto"
                    />
                </div>
                <div className="left-section-content w-full lg:w-2/5 px-4 sm:px-6 lg:pl-12 lg:pr-0">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-5">
                        {title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                        {description}
                    </p>

                    {tryDemo && (
                        <div className="left-section-links flex flex-wrap gap-4 sm:gap-6 my-5">
                            {tryDemo && (
                                <Link
                                    to="/product"
                                    className="text-blue-700 text-base sm:text-lg hover:text-blue-800 transition-colors"
                                >
                                    {tryDemo} →
                                </Link>
                            )}
                            {learnMore && (
                                <Link
                                    to="/product"
                                    className="text-blue-700 text-base sm:text-lg hover:text-blue-800 transition-colors"
                                >
                                    {learnMore} →
                                </Link>
                            )}
                        </div>
                    )}

                    {googlePlay && (
                        <div className="left-section-buttons flex flex-wrap gap-4 sm:gap-6 my-5">
                            <Link
                                to="/product"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="./google-play.svg"
                                    alt="Download on Google Play"
                                    className="h-12 sm:h-14 w-auto"
                                />
                            </Link>
                            <Link
                                to="/product"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="./app-store.svg"
                                    alt="Download on App Store"
                                    className="h-12 sm:h-14 w-auto"
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default LeftSection;
