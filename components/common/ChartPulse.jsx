import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function ChartPulse({ activity }) {
  ChartJS.register(LinearScale, LineElement, CategoryScale, PointElement);

  const labels = [
    "week1",
    "week2",
    "week3",
    "week4",
    "week5",
    "week6",
    "week7",
    "week8",
    "week9",
    "week10",
    "week11",
    "week12",
  ];
  const data = {
    labels,
    datasets: [
      {
        data: activity,
        borderColor: "#fff",
        borderRadius: "999",
        borderWidth: "4",
        lineTension: 0.5,
        pointRadius: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    layout: {
      padding: 0,
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        display: false,
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="chart">
      <Line data={data} options={options} />
      <div className="blur">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
