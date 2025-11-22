import React from "react";

function Pricing() {
    return (
        <>
            <div className="pricing my-15 mx-5 md:mx-25 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
                <div className="pricing-left md:col-span-2">
                    <h1 className="text-2xl font-medium mb-5">
                        Unbeatable Pricing
                    </h1>
                    <p className="text-md text-gray-600">
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                </div>

                <div className="pricing-right md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="group">
                        <img
                            src="./zero-image.svg"
                            alt="Free account"
                            className="w-20 mx-auto mb-2"
                        />
                        <p className="text-xs px-2">Free account opening</p>
                    </div>

                    <div className="group">
                        <img
                            src="./zero-image.svg"
                            alt="Free equity"
                            className="w-20 mx-auto mb-2"
                        />
                        <p className="text-xs px-2">
                            Free equity delivery and direct mutual funds
                        </p>
                    </div>

                    <div className="group">
                        <img
                            src="./twenty-image.svg"
                            alt="Intraday"
                            className="w-20 mx-auto mb-2"
                        />
                        <p className="text-xs px-2">Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;
