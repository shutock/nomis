import * as Chart from "./Chart";
import Image from "next/image";
import old from "../../public/emoji/old.png";
import yung from "../../public/emoji/old.png";
import avg from "../../public/emoji/old.png";

export function Score({ score = 69.69 }) {
  return (
    <div className="container card score">
      <Chart.Score score={score} />
      <h5>Nomis Score</h5>
      <div>
        <p>The overall Nomis score is</p>
        <p>{score}/100.00</p>
      </div>
    </div>
  );
}

export function Pulse({ activity }) {
  return (
    <div className="container card pulse">
      <Chart.Activity activity={activity} />
      <h5>Wallet&apos;s Pulse</h5>
      <div>
        <p>
          This is wallet&apos;s on-chain activity. You&apos;ve been quite active
          for the last 3 months.
        </p>
      </div>
    </div>
  );
}

export default function Achievement({ emoji, title, description }) {
  const src = emoji == "old" ? old : emoji == "yung" ? yung : avg;
  return (
    <div className="container card achievement">
      <div className="emoji">
        <Image src={src} width="64" height="64" />
      </div>
      <h5>{title}</h5>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}