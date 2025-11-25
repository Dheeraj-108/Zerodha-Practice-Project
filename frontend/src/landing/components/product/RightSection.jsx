import { Link } from "react-router";

function RightSection({ imageUrl, title, description, learnMore }) {
    return (
        <>
            <div className="right-section flex flex-col lg:flex-row justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-16 lg:my-20 max-w-7xl gap-8 lg:gap-12">
                <div className="right-section-content w-full lg:w-2/5 px-4 sm:px-6 lg:pr-12 lg:pl-0 order-2 lg:order-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-5">
                        {title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                        {description}
                    </p>
                    {learnMore && (
                        <Link
                            to="/product"
                            className="text-blue-700 text-base sm:text-lg hover:text-blue-800 transition-colors inline-block"
                        >
                            {learnMore} →
                        </Link>
                    )}
                </div>

                <div className="right-section-image w-full lg:w-2/5 max-w-md lg:max-w-none order-1 lg:order-2">
                    <img
                        src={imageUrl}
                        alt="Product Preview"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </>
    );
}

export default RightSection;
