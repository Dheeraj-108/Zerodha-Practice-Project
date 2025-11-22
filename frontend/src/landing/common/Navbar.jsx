import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='sticky top-0 bg-white shadow-sm z-50'>
            <div className='flex justify-between md:justify-around items-center h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
                <div className="navbar-left shrink-0">
                    <img
                        src="./zerodha-logo.svg"
                        alt="Zerodha Logo"
                        className='h-5 w-auto'
                    />
                </div>

                <div className="navbar-right hidden md:block">
                    <ul className='list-none flex gap-6 lg:gap-10 text-gray-600 text-sm lg:text-base'>
                        <li className='cursor-pointer hover:text-blue-600 transition-colors duration-200'>Signup</li>
                        <li className='cursor-pointer hover:text-blue-600 transition-colors duration-200'>About</li>
                        <li className='cursor-pointer hover:text-blue-600 transition-colors duration-200'>Products</li>
                        <li className='cursor-pointer hover:text-blue-600 transition-colors duration-200'>Pricing</li>
                        <li className='cursor-pointer hover:text-blue-600 transition-colors duration-200'>Support</li>
                    </ul>
                </div>

                <button
                    className='md:hidden text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-200 p-2'
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {isMenuOpen && (
                <div className='md:hidden bg-white border-t border-gray-200 shadow-lg'>
                    <ul className='list-none flex flex-col text-gray-600'>
                        <li className='px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100'>
                            Signup
                        </li>
                        <li className='px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100'>
                            About
                        </li>
                        <li className='px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100'>
                            Products
                        </li>
                        <li className='px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100'>
                            Pricing
                        </li>
                        <li className='px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200'>
                            Support
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;