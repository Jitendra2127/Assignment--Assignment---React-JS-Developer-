import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = () => {
    const data = {
        labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "02", "39", "9", "39", "893", "93"],
        datasets: [
            {
                label: "Activity",
                data: [3000, 9000, 6000, 8000, 5000, 7000, 4000, 1000, 5000, 2000, 8000, 8000, 6000, 4994, 9030, 9393,4000],
                backgroundColor: "rgba(54, 162, 235, 0.7)",
                borderRadius: 8, // Rounded bars
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        scales: {
            x: {
                ticks: { color: "#fff" },
                grid: { display: false },
            },
            y: {
                ticks: {
                    color: "#fff",
                    callback: (value) => `${value / 1000}k`, // Format y-axis labels
                    stepSize: 1000,
                    max: 3000,
                },
                grid: { color: "rgba(255, 255, 255, 0.1)" },
            },
        },
    };

    return (
        <div className="w-full ">
            <Bar data={data} options={options} />
        </div>
    );
};

export default Graph;
