import { holdings } from "../../data.js";

function Holdings() {
    return (
        <>
            <div className="holdings p-4 sm:p-6 lg:p-10 flex flex-col h-full">
                <h1 className="text-xl sm:text-2xl font-semibold py-3 sm:py-5">
                    Holdings
                </h1>
                <div className="holdings-table overflow-x-auto overflow-y-auto max-h-[63vh]">
                    <table className="w-full lg:w-4/5 text-center mx-auto border-collapse text-xs sm:text-sm lg:text-base">
                        <thead className="sticky top-0 bg-white z-10 border-b border-gray-200">
                            <tr className="divide-x divide-gray-200">
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    Instrument
                                </th>
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    Qty
                                </th>
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    Avg Cost
                                </th>
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    LTP
                                </th>
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    Curr. Value
                                </th>
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    PNL
                                </th>
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    Net Chg
                                </th>
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    Day Chg
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {holdings.map((stock, index) => {
                                const currValue = stock.price * stock.qty;
                                const isProfit =
                                    currValue - stock.avg * stock.qty >= 0.0;

                                return (
                                    <tr
                                        key={index}
                                        className="divide-x divide-gray-200"
                                    >
                                        <td className="px-1 py-1.5 sm:px-2 sm:py-2">
                                            {stock.name}
                                        </td>
                                        <td className="px-1 py-1.5 sm:px-2 sm:py-2">
                                            {stock.qty}
                                        </td>
                                        <td className="px-1 py-1.5 sm:px-2 sm:py-2">
                                            {stock.avg.toFixed(2)}
                                        </td>
                                        <td className="px-1 py-1.5 sm:px-2 sm:py-2">
                                            {stock.price.toFixed(2)}
                                        </td>
                                        <td className="px-1 py-1.5 sm:px-2 sm:py-2">
                                            {currValue.toFixed(2)}
                                        </td>
                                        <td
                                            className={
                                                isProfit
                                                    ? "px-1 py-1.5 sm:px-2 sm:py-2 text-green-500"
                                                    : "px-1 py-1.5 sm:px-2 sm:py-2 text-red-500"
                                            }
                                        >
                                            {(
                                                currValue -
                                                stock.qty * stock.avg
                                            ).toFixed(2)}
                                        </td>
                                        <td
                                            className={
                                                stock.net.includes("-")
                                                    ? "px-1 py-1.5 sm:px-2 sm:py-2 text-red-500"
                                                    : "px-1 py-1.5 sm:px-2 sm:py-2 text-green-500"
                                            }
                                        >
                                            {stock.net}
                                        </td>
                                        <td
                                            className={
                                                stock.day.includes("-")
                                                    ? "px-1 py-1.5 sm:px-2 sm:py-2 text-red-500"
                                                    : "px-1 py-1.5 sm:px-2 sm:py-2 text-green-500"
                                            }
                                        >
                                            {stock.day}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="holdings-details flex flex-col sm:flex-row justify-around gap-4 sm:gap-0 mt-auto">
                    <div className="holdings-investment text-center">
                        <h1 className="text-lg sm:text-xl font-semibold">
                            29,875.33
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500">
                            Total Investment
                        </p>
                    </div>
                    <div className="holdings-curr-val text-center">
                        <h1 className="text-lg sm:text-xl font-semibold">
                            31,875.33
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500">
                            Current Value
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Holdings;
