import React from "react";
import { Link } from "react-router";

function NotFound() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 min-h-screen px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
                <div className="flex-1 text-center lg:text-left max-w-lg order-2 lg:order-1">
                    <h3 className="text-base sm:text-lg text-gray-500 mb-2">
                        404
                    </h3>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">
                        Kiaan couldn't find that page
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        We couldn't find the page you were looking for. Visit{" "}
                        <Link
                            to="/"
                            className="text-blue-600 hover:text-blue-700 underline transition-colors"
                        >
                            Zerodha's home page
                        </Link>
                    </p>
                </div>

                <div className="flex-1 max-w-md lg:max-w-lg order-1 lg:order-2">
                    <img
                        src="./kiaan404.jpg"
                        alt="Kiaan 404 - Page not found illustration"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </>
    );
}

export default NotFound;
