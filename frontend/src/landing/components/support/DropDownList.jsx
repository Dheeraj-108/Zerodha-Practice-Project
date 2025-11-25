import { useState } from "react";

function DropDownList() {
    const [openSection, setOpenSection] = useState("account-opening");

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            id: "account-opening",
            title: "Account Opening",
            icon: (
                <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v12m6-6H6"
                    />
                </svg>
            ),
            items: [
                { title: "Resident individual", link: "#" },
                { title: "Minor", link: "#" },
                { title: "Non Resident Indian (NRI)", link: "#" },
                { title: "Company, Partnership, HUF and LLP", link: "#" },
                { title: "Glossary", link: "#" },
            ],
        },
        {
            id: "your-account",
            title: "Your Zerodha Account",
            icon: (
                <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="8" r="4" strokeWidth="2" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                    />
                </svg>
            ),
            items: [
                { title: "Login credentials", link: "#" },
                { title: "Your Profile", link: "#" },
                {
                    title: "Account modification and segment addition",
                    link: "#",
                },
                { title: "CMR & DP ID", link: "#" },
                { title: "Nomination", link: "#" },
            ],
        },
        {
            id: "kite",
            title: "Kite",
            icon: (
                <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="2" strokeWidth="2" />
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2v4m0 12v4M2 12h4m12 0h4"
                    />
                </svg>
            ),
            items: [
                { title: "Trading FAQs", link: "#" },
                { title: "Kite features", link: "#" },
                { title: "Kite web and Mobile", link: "#" },
                { title: "Orders", link: "#" },
            ],
        },
        {
            id: "funds",
            title: "Funds",
            icon: (
                <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 8h6M9 12h6M9 16h3"
                    />
                </svg>
            ),
            items: [
                { title: "Fund withdrawal", link: "#" },
                { title: "Adding funds", link: "#" },
                { title: "Adding bank accounts", link: "#" },
                { title: "eMandates", link: "#" },
            ],
        },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-16">
            <div className="space-y-4">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className="border border-gray-300 rounded-sm bg-white overflow-hidden"
                    >
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                {section.icon}
                                <h3 className="text-base sm:text-lg font-medium text-gray-800">
                                    {section.title}
                                </h3>
                            </div>
                            <svg
                                className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-500 transition-transform duration-300 ${
                                    openSection === section.id
                                        ? "rotate-180"
                                        : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out ${
                                openSection === section.id
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="px-6 sm:px-12 pb-6 pt-2">
                                <ul className="space-y-3 sm:space-y-4">
                                    {section.items.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.link}
                                                className="text-blue-600 hover:text-blue-700 hover:underline text-sm sm:text-base transition-colors"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DropDownList;
