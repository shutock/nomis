import * as Chart from "../Chart";

export default function Pulse({ wallet, blockchain }) {
  const curDate = new Date();
  // const activityString = "You've been quite active for the last 3 months";
  const activityString = "Lorem ipsum";

  const exceptions = "ripple";

  return (
    <div className="card pulse">
      {blockchain != exceptions ? <Chart.Pulse wallet={wallet} /> : ""}
      <h5>{blockchain != exceptions ? "Wallet's Pulse" : "No Pusle Chart"}</h5>
      <p>
        {blockchain != exceptions
          ? `This is wallet's on-chain activity. ${activityString}.`
          : "There is no data to show."}
      </p>
    </div>
  );
}
