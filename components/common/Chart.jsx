import {
  ArcElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.defaults.font = {
  family: "Segoe UI",
};

export function Score({ score }) {
  ChartJS.register(ArcElement);
  const data = {
    datasets: [
      {
        data: [100 - score, score],
        backgroundColor: ["transparent", "#fff"],
        borderWidth: 0,
        cutout: "80%",
        borderRadius: "90",
      },
    ],
  };
  const dataBg = {
    datasets: [
      {
        data: [1],
        backgroundColor: ["rgba(255, 255, 255, .4)"],
        borderWidth: 0,
        cutout: "80%",
        borderRadius: "0",
        options: { animation: false },
      },
    ],
  };
  return (
    <div className="chart">
      <Doughnut data={data} />
      <div className="bg">
        <Doughnut data={dataBg} />
      </div>
      <div className="blur">
        <Doughnut data={data} />
      </div>
      <div className="number">{Math.round(score)}</div>
    </div>
  );
}

export function Activity() {
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
        data: [0, 2, 1, 3, 6, 2, 4, 1, 6, 8, 4, 9],
        borderColor: "#fff",
        borderRadius: "999",
        borderWidth: "4",
        lineTension: 0.5,
        pointRadius: 0,
        backgroundColor: "red",
      },
    ],
  };
  const options = {
    responsive: true,
    layout: {
      padding: 0,
    },
    scales: {
      y: { display: false },
      x: { display: false },
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
