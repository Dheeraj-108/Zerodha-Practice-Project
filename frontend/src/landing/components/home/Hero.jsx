import React from 'react';

function Hero() {
    return (
        <div className='flex flex-col items-center justify-center py-10 mx-4 min-h-screen bg-white'>

            <img
                src="./landing.svg"
                alt="Investment Platform"
                className='w-full max-w-md md:max-w-2xl h-auto mb-8'
            />

            <div className='text-center max-w-2xl'>
                <h1 className='text-3xl md:text-5xl font-medium text-gray-800 mb-4'>
                    Invest in everything
                </h1>

                <p className='text-base md:text-xl text-gray-600 mb-8'>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>

                <button
                    type='button'
                    className='px-8 py-2 bg-[rgb(56,126,209)] hover:bg-[rgb(46,106,189)] active:bg-[rgb(36,96,169)] text-white text-base sm:text-lg md:text-xl font-medium rounded shadow-md hover:shadow-lg transition-all duration-200 mt-2'
                >
                    Sign Up for Free
                </button>
            </div>
        </div>
    );
}

export default Hero;