import Image from "next/image";

import ChartScore from "./ChartScore";
import ChartPulse from "./ChartPulse";

import old from "../../public/emoji/old.png";
import yung from "../../public/emoji/old.png";
import avg from "../../public/emoji/old.png";

export function Score({ score = 69.69 }) {
  return (
    <div className="container card score">
      <ChartScore score={score} />
      <h3>Nomis Score</h3>
      <div>
        <p>The overall Nomis score is</p>
        <p>{Math.round(score * 100) / 100}/100.00</p>
      </div>
    </div>
  );
}

export function Pulse({ activity }) {
  return (
    <div className="container card pulse">
      {/* <ChartPulse activity={activity} /> */}
      <h3>Wallet&apos;s Pulse</h3>
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
        <Image src={src} width="64" height="64" alt="Emoji" />
      </div>
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
