import React, { useContext, useState } from "react";
import { Link } from "react-router";

const DASHBOARD_URL =
    import.meta.env.VITE_DASHBOARD_URL ||
    "https://dheeraj-goswami-zerodha-dashboard.netlify.app";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignupRedirect = (e) => {
        e.preventDefault();
        window.location.href = `${DASHBOARD_URL}/signup`;
    };

    return (
        <nav className="sticky top-0 bg-white shadow-sm z-50">
            <div className="flex justify-between md:justify-around items-center h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="navbar-left shrink-0">
                    <Link to="/">
                        <img
                            src="./zerodha-logo.svg"
                            alt="Zerodha Logo"
                            className="h-5 w-auto"
                        />
                    </Link>
                </div>

                <div className="navbar-right hidden md:block">
                    <ul className="list-none flex gap-6 lg:gap-10 text-gray-600 text-sm lg:text-base">
                        <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
                            <button
                                onClick={handleSignupRedirect}
                                className="hover:text-red-500 font-medium"
                            >
                                Signup
                            </button>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
                            <Link to="/product">Products</Link>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
                            <Link to="/support">Support</Link>
                        </li>
                    </ul>
                </div>

                <button
                    className="md:hidden text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-200 p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <ul className="list-none flex flex-col text-gray-600">
                        <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100">
                            <button
                                onClick={(e) => {
                                    handleSignupRedirect(e);
                                    setIsMenuOpen(false);
                                }}
                            >
                                Signup
                            </button>
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100">
                            <Link to="/product">Products</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100">
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                            <Link to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
