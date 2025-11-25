function Table() {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 my-10 sm:my-16 lg:my-20">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-12 lg:mb-16">
                    Charges for Account Opening
                </h1>

                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-300">
                                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-medium text-gray-700">
                                    Type of account
                                </th>
                                <th className="px-4 sm:px-6 py-3 sm:py-4 text-right text-sm sm:text-base font-medium text-gray-700">
                                    Charges
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600">
                                    Online account
                                </td>
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                                    <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-green-600 text-white rounded font-medium">
                                        FREE
                                    </span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600">
                                    Offline account
                                </td>
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                                    <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-green-600 text-white rounded font-medium">
                                        FREE
                                    </span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600">
                                    NRI account (offline only)
                                </td>
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-right text-sm sm:text-base text-gray-700 font-medium">
                                    ₹ 500
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600">
                                    Partnership, LLP, HUF, or Corporate accounts
                                    (offline only)
                                </td>
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-right text-sm sm:text-base text-gray-700 font-medium">
                                    ₹ 500
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table;
