import { useState, useContext } from "react";
import { Link } from "react-router";
import AuthContext from "./context/AuthContext";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen);
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
                        <ul className="flex gap-2 xl:gap-4 items-center">
                            {menuItems.map((item) => (
                                <li
                                    key={item}
                                    className="cursor-pointer hover:text-red-600 px-2 py-1 text-sm xl:text-base transition-colors"
                                >
                                    <Link to={getRoutePath(item)}>{item}</Link>
                                </li>
                            ))}
                            <li className="relative">
                                <div
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={toggleProfileMenu}
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm border border-blue-200">
                                        {user?.username
                                            ? user.username[0].toUpperCase()
                                            : "U"}
                                    </div>
                                </div>

                                {isProfileOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-xs text-gray-500">
                                                Signed in as
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {user?.username || "User"}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsProfileOpen(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </li>
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
                        {/* Mobile Profile Section */}
                        <li className="border-b border-gray-200 last:border-b-0 bg-gray-50">
                            <div className="px-4 py-3">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm border border-blue-200">
                                        {user?.username
                                            ? user.username[0].toUpperCase()
                                            : "U"}
                                    </div>
                                    <span className="font-medium text-gray-900">
                                        {user?.username}
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="text-sm text-red-600 font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
