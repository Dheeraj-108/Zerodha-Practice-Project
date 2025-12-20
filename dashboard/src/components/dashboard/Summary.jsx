import { useEffect, useState } from "react";
import axios from "axios";
import { HoldingsChart } from "./HoldingsChart";
import { PositionChart } from "./PositionChart";

const API_URL = import.meta.env.VITE_API_URL;

function Summary() {
    const [generalDetails, setGeneralDetails] = useState({});

    useEffect(() => {
        axios.get(`${API_URL}/api/v1/kite/users/details`).then((res) => {
            setGeneralDetails(res.data);
        });
    }, []);

    return (
        <>
            <div className="summary mx-3 sm:mx-5 h-[calc(100vh-4rem)] overflow-y-auto py-6 sm:py-10">
                <div className="user-name border-b border-gray-400">
                    <p className="text-lg sm:text-xl font-medium py-4 sm:py-5">
                        Welcome User!
                    </p>
                </div>

                <div className="equity my-10 sm:my-20">
                    <h1 className="text-lg sm:text-xl font-medium mb-4 sm:mb-5">
                        Equity
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
                        <div className="equity-left sm:pr-8 md:pr-16 lg:pr-24 sm:border-r border-gray-400">
                            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-1">
                                {generalDetails.totalPositions
                                    ?.reduce(
                                        (total, position) =>
                                            total +
                                            position.qty * position.avg -
                                            position.qty * position.price,
                                        0
                                    )
                                    .toFixed(2)
                                    .toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "INR",
                                    })}
                            </p>
                            <p className="text-sm sm:text-base text-gray-600">
                                Position P/L
                            </p>
                        </div>

                        <div className="equity-right sm:pl-8 md:pl-16 lg:pl-24">
                            <p className="text-sm sm:text-base mb-2">
                                Current Value:{" "}
                                <span className="text-gray-500">
                                    {generalDetails.totalPositions
                                        ?.reduce(
                                            (total, position) =>
                                                total +
                                                position.qty * position.avg,
                                            0
                                        )
                                        .toFixed(2)
                                        .toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "INR",
                                        })}
                                </span>
                            </p>
                            <p className="text-sm sm:text-base">
                                Investment:{" "}
                                <span className="text-gray-500">
                                    {generalDetails.totalPositions
                                        ?.reduce(
                                            (total, position) =>
                                                total +
                                                position.qty * position.price,
                                            0
                                        )
                                        .toFixed(2)
                                        .toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "INR",
                                        })}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="position-chart w-full h-64 sm:h-80 lg:h-96 mt-6">
                        <PositionChart />
                    </div>
                </div>

                <div className="holdings my-10 sm:my-20">
                    <h1 className="text-lg sm:text-xl font-medium mb-4 sm:mb-5">
                        Holdings
                    </h1>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
                            <div className="holdings-left sm:pr-8 md:pr-16 lg:pr-24 sm:border-r border-gray-400">
                                <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-1">
                                    {generalDetails.totalHoldings
                                        ?.reduce(
                                            (total, holding) =>
                                                total +
                                                holding.qty * holding.avg -
                                                holding.qty * holding.price,
                                            0
                                        )
                                        .toFixed(2)}
                                </p>
                                <p className="text-sm sm:text-base text-gray-600">
                                    Holdings P/L
                                </p>
                            </div>

                            <div className="holdings-right sm:pl-8 md:pl-16 lg:pl-24">
                                <p className="text-sm sm:text-base mb-2">
                                    Current Value:{" "}
                                    <span className="text-gray-500">
                                        {" "}
                                        {generalDetails.totalHoldings
                                            ?.reduce(
                                                (total, holding) =>
                                                    total +
                                                    holding.qty * holding.avg,
                                                0
                                            )
                                            .toFixed(2)}
                                    </span>
                                </p>
                                <p className="text-sm sm:text-base">
                                    Investment:{" "}
                                    <span className="text-gray-500">
                                        {" "}
                                        {generalDetails.totalHoldings
                                            ?.reduce(
                                                (total, holding) =>
                                                    total +
                                                    holding.qty * holding.price,
                                                0
                                            )
                                            .toFixed(2)}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="holdings-chart w-full h-64 sm:h-80 lg:h-96">
                            <HoldingsChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Summary;
