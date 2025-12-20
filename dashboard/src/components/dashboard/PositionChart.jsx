import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const hue = (i * 360) / count;
        colors.push({
            background: `hsla(${hue}, 70%, 60%, 0.6)`,
            border: `hsla(${hue}, 70%, 50%, 1)`,
        });
    }
    return colors;
};

export function PositionChart() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/kite/positions").then((res) => {
            setPositions(res.data);
        });
    }, []);

    const colors = generateColors(positions.length);

    const data = {
        labels: positions.map((position) => position.name),
        datasets: [
            {
                label: "Position Value",
                data: positions.map((position) => position.qty * position.avg),
                backgroundColor: colors.map((c) => c.background),
                borderColor: colors.map((c) => c.border),
                borderWidth: 1,
            },
        ],
    };

    return <Doughnut data={data} />;
}
