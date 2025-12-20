import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Holdings",
        },
    },
};

export function HoldingsChart() {
    const [holdings, setHoldings] = useState([]);

    const data = {
        labels: holdings.map((holding) => holding.name),
        datasets: [
            {
                label: "Investment",
                data: holdings.map((holding) => holding.qty * holding.avg),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "P/L",
                data: holdings.map((holding) => holding.qty * holding.price),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    useEffect(() => {
        axios.get(`${API_URL}/api/v1/kite/holdings`).then((res) => {
            setHoldings(res.data);
        });
    }, []);
    return <Bar options={options} data={data} />;
}
