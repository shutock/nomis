import dynamic from "next/dynamic";

import MainLayout from "../../layouts/MainLayout";
import { Score, Pulse } from "../../components/common/Card";

import userpick from "../../public/userpick.png";

const Achievement = dynamic(() => import("../../components/common/Card"), {
  ssr: false,
});

export default function GetScrore() {
  const wallet = {
    address: "artyshatilov.eth",
    blockchain: "eth",
    userpick: { userpick },
    score: 69.69,
    age: { months: 46 },
    balance: 0.07,
    turnover: 44.94,
    spendings: 32,
    activity: [0, 2, 1, 3, 6, 2, 4, 1, 6, 8, 4, 9],
    recentActivity: ["Uniswap", "Rainbow", "OpenSea", "AAVE"],
  };
  wallet.age.years = Math.round(wallet.age.months / 12);
  const spendings = Math.round(wallet.spendings / 10) * 10;
  return (
    <MainLayout title="Get Score">
      <div className="wrapper">
        <section className="code">
          <pre>{`wallet = {
  address: "${wallet.address}",
  blockchain: "${wallet.blockchain}",
  userpick: { userpick },
  score: ${wallet.score},
  age: { months: ${wallet.age.months} },
  balance: ${wallet.balance},
  turnover: ${wallet.turnover},
  spendings: ${wallet.spendings},
  activity: [0, 2, 1, 3, 6, 2, 4, 1, 6, 8, 4, 9],
  recentActivity: ["Uniswap", "Rainbow", "OpenSea", "AAVE"],
};
  `}</pre>
        </section>
        <section className="getScore">
          <div className="container information">
            <section className="highlights">
              <div className="container">
                <h4>Highlights</h4>
              </div>
              <div className="container cards">
                <Score score={wallet.score} />
                <Pulse />
                <Achievement
                  emoji="old"
                  title="The Ancesor"
                  description="You have a pretty old wallet—more than 4 years since the first transaction."
                />
                <Achievement
                  emoji="old"
                  title="Big Spender"
                  description={`This wallet has a total spendings of more than Ξ${spendings}.`}
                />
              </div>
            </section>
          </div>
          <div className="container wallet">Yo</div>
        </section>
      </div>
    </MainLayout>
  );
}
