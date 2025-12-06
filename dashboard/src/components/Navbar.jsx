import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = ["Dashboard", "Orders", "Positions", "Holdings", "Funds"];

    const getRoutePath = (item) => {
        if (item === "Dashboard") return "/";
        return `/${item.toLowerCase()}`;
    };

    return (
        <>
            <nav className="relative h-14 sm:h-16 border-b border-gray-400 shadow-md flex">
                <div className="hidden md:flex w-1/4 justify-between items-center px-2 lg:px-3 border-r border-gray-400">
                    <p className="text-xs lg:text-sm font-medium">
                        NIFTY 50 <span className="text-green-600">25000</span>
                    </p>
                    <p className="text-xs lg:text-sm font-medium">
                        SENSEX <span className="text-green-600">50000</span>
                    </p>
                </div>

                <div className="flex-1 flex justify-between items-center px-3 sm:px-4 lg:px-6">
                    <div className="flex items-center">
                        <img
                            src="kite-logo.png"
                            alt="Kite Logo"
                            className="h-8 w-8 sm:h-10 sm:w-10"
                        />
                    </div>

                    <nav className="hidden lg:block">
                        <ul className="flex gap-2 xl:gap-4">
                            {menuItems.map((item) => (
                                <li
                                    key={item}
                                    className="cursor-pointer hover:text-red-600 px-2 py-1 text-sm xl:text-base transition-colors"
                                >
                                    <Link to={getRoutePath(item)}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="lg:hidden fixed top-14 sm:top-16 left-0 right-0 bg-white border-b border-gray-400 shadow-lg z-50">
                    <ul className="flex flex-col">
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                className="border-b border-gray-200 last:border-b-0"
                            >
                                <Link
                                    to={getRoutePath(item)}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full px-4 py-3 hover:bg-blue-50 transition-colors"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
