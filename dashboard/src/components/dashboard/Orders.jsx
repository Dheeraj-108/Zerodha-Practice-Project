import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/api/v1/kite/orders`)
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.log("Failed to update the sell status", err);
            });
    }, []);

    return (
        <>
            <div className="orders p-4 sm:p-6 lg:p-10 flex flex-col h-full">
                <h1 className="text-xl sm:text-2xl font-semibold py-3 sm:py-5">
                    Orders
                </h1>
                <div className="orders-table overflow-x-auto overflow-y-auto max-h-[62vh]">
                    <table className="w-full lg:w-3/5 text-center mx-auto border-collapse text-xs sm:text-sm lg:text-base">
                        <thead className="sticky top-0 bg-white z-10 border-b border-gray-200">
                            <tr className="divide-x divide-gray-200">
                                <th className="px-2 py-2 sm:px-3 sm:py-2.5">
                                    Instrument
                                </th>
                                <th className="px-2 py-2 sm:px-3 sm:py-2.5">
                                    Qty
                                </th>
                                <th className="px-2 py-2 sm:px-3 sm:py-2.5">
                                    Price
                                </th>
                                <th className="px-2 py-2 sm:px-3 sm:py-2.5">
                                    Mode
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orders.map((order, index) => (
                                <tr
                                    key={index}
                                    className="divide-x divide-gray-200"
                                >
                                    <td className="px-2 py-2 sm:px-3 sm:py-2.5">
                                        {order.name}
                                    </td>
                                    <td className="px-2 py-2 sm:px-3 sm:py-2.5">
                                        {order.qty}
                                    </td>
                                    <td className="px-2 py-2 sm:px-3 sm:py-2.5">
                                        ₹{order.price.toFixed(2)}
                                    </td>
                                    <td
                                        className={
                                            order.mode === "Buy"
                                                ? "px-2 py-2 sm:px-3 sm:py-2.5 text-blue-500 font-medium"
                                                : "px-2 py-2 sm:px-3 sm:py-2.5 text-red-500 font-medium"
                                        }
                                    >
                                        {order.mode}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="orders-summary mt-auto text-center pt-6">
                    <div className="total-orders">
                        <h1 className="text-lg sm:text-xl font-semibold">
                            {orders.length}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500">
                            Total Orders
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;
