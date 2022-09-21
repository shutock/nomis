import { ArcElement, Chart as ChartJS } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

export default function Score({ score }) {
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
