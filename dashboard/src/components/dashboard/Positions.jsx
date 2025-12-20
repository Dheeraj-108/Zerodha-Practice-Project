import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Positions() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/api/v1/kite/positions`).then((res) => {
            setPositions(res.data);
        });
    }, []);
    return (
        <>
            <div className="positions p-4 sm:p-6 lg:p-10 flex flex-col h-full">
                <h1 className="text-xl sm:text-2xl font-semibold py-3 sm:py-5">
                    Positions
                </h1>
                <div className="positions-table overflow-x-auto overflow-y-auto max-h-[63vh]">
                    <table className="w-full lg:w-4/5 text-center mx-auto border-collapse text-xs sm:text-sm lg:text-base">
                        <thead className="border-b border-gray-200">
                            <tr className="divide-x divide-gray-200">
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    Product
                                </th>
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
                                    PNL
                                </th>
                                <th className="px-1 py-1.5 sm:px-2 sm:py-2">
                                    Change
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {positions.map((stock, index) => {
                                const currValue = stock.price * stock.qty;
                                const isProfit =
                                    currValue - stock.avg * stock.qty >= 0.0;

                                return (
                                    <tr className="divide-x divide-gray-200">
                                        <td className="px-1 py-1.5 sm:px-2 sm:py-2">
                                            {stock.product}
                                        </td>
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
                                        <td
                                            className={
                                                isProfit
                                                    ? "px-1 py-1.5 sm:px-2 sm:py-2 text-green-500"
                                                    : "px-1 py-1.5 sm:px-2 sm:py-2 text-red-500"
                                            }
                                        >
                                            {(
                                                currValue -
                                                stock.avg * stock.qty
                                            ).toFixed(2)}
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

                <div className="positions-details mt-auto text-center">
                    <div className="positions-investment">
                        <h1 className="text-lg sm:text-xl font-semibold">
                            {positions
                                .reduce(
                                    (acc, stock) => acc + stock.avg * stock.qty,
                                    0
                                )
                                .toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                })}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500">
                            Total Investment
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Positions;
