import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

export function Score({ score }) {
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

export function Activity({
  week12 = 0,
  week34 = 1,
  week56 = 0,
  week78 = 2,
  week910 = 0,
  week1112 = 3,
}) {
  return <div className="chart"></div>;
}
