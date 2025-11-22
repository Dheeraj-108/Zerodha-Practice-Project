import React from 'react';

function Education() {
    return (
        <>
            <div className="education flex flex-col md:flex-row md:justify-around md:items-center gap-8 md:gap-4 px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-7xl mx-auto">

                <div className="education-left w-full md:w-auto flex justify-center md:block">
                    <img src="./education.svg" alt="Education illustration" className="w-full max-w-md md:max-w-none" />
                </div>

                <div className="education-right flex flex-col w-full md:w-1/2 lg:w-2/5">
                    <h2 className='text-xl sm:text-2xl lg:text-3xl font-medium mb-4'>Free and open market education</h2>
                    <p className='text-gray-500 text-sm sm:text-base mb-6 md:mb-10'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        <a href="" className='inline-block text-blue-500 hover:text-blue-700 transition-colors duration-200 font-semibold mt-2'>Varsity &rarr;</a>
                    </p>
                    <p className='text-gray-500 text-sm sm:text-base mb-6 md:mb-10'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        <a href="" className='inline-block text-blue-500 hover:text-blue-700 transition-colors duration-200 font-semibold mt-2'>TradingQ&A &rarr;</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Education;