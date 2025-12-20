import { useState } from "react";
import axios from "axios";

function BuySellPopUp({ stock, action, onClose, onOrderSuccess }) {
    const [quantity, setQuantity] = useState(1);
    const [orderType, setOrderType] = useState("Intraday");

    if (!stock) return null;

    const handleSubmit = () => {
        console.log(`${action} ${quantity} shares of ${stock.name}`);

        axios
            .post("http://localhost:8080/orders", {
                stock,
                action,
                quantity,
                orderType,
            })
            .then((res) => {
                console.log(res.data);
                onOrderSuccess({ stock, action, quantity, orderType });
            });
        onClose();
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-xs z-40 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <div
                    className="bg-white rounded-lg shadow-2xl w-full max-w-md sm:max-w-lg transform transition-all"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="border-b border-gray-200 px-4 sm:px-6 py-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                                    {stock.name}
                                </h1>
                                <p className="text-sm sm:text-base text-gray-600 mt-1">
                                    Price: ₹{stock.price}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="px-4 sm:px-6 py-6">
                        <div className="space-y-4">
                            {/* Order Type Toggle */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Order Type
                                </label>
                                <div className="flex bg-gray-100 rounded-lg p-1">
                                    <button
                                        type="button"
                                        onClick={() => setOrderType("Intraday")}
                                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                                            orderType === "Intraday"
                                                ? "bg-white text-blue-600 shadow-sm"
                                                : "text-gray-600 hover:text-gray-900"
                                        }`}
                                    >
                                        Intraday
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setOrderType("Delivery")}
                                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                                            orderType === "Delivery"
                                                ? "bg-white text-blue-600 shadow-sm"
                                                : "text-gray-600 hover:text-gray-900"
                                        }`}
                                    >
                                        Delivery
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="quantity"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Quantity
                                </label>
                                <input
                                    id="quantity"
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(
                                            Math.max(
                                                1,
                                                parseInt(e.target.value) || 1
                                            )
                                        )
                                    }
                                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base sm:text-lg"
                                    placeholder="Enter quantity"
                                />
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm sm:text-base text-gray-600">
                                        Total Amount:
                                    </span>
                                    <span className="text-lg sm:text-xl font-semibold text-gray-900">
                                        ₹
                                        {(
                                            parseFloat(stock.price) * quantity
                                        ).toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={handleSubmit}
                            className={`flex-1 py-2.5 sm:py-3 px-4 rounded-lg font-medium text-white transition-all transform hover:scale-105 active:scale-95 ${
                                action === "Buy"
                                    ? "bg-blue-500 hover:bg-blue-600"
                                    : "bg-red-500 hover:bg-red-600"
                            }`}
                        >
                            {action} {quantity}{" "}
                            {quantity === 1 ? "Share" : "Shares"}
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 py-2.5 sm:py-3 px-4 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuySellPopUp;
