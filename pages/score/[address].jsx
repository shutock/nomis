import { useState, useEffect } from "react";

import dynamic from "next/dynamic";

import MainLayout from "../../layouts/MainLayout";

import User from "../../components/common/User";
import Recent from "../../components/common/Recent";
import Stats from "../../components/common/Stats";

import { Score, Pulse } from "../../components/common/Card";
const Achievement = dynamic(() => import("../../components/common/Card"), {
  ssr: false,
});

export default function Scored({ wallet }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  return (
    <MainLayout title="Get Score">
      <div className="wrapper">
        <section className={`getScore ${scroll ? "scrolledGetScore" : ""}`}>
          <div className="container information">
            <section className="highlights">
              <div className="container">
                <h2>Highlights</h2>
              </div>
              <div className="container cards">
                <Score score={wallet.score} />
                <Pulse activity={wallet.activity} />
                <Achievement
                  emoji="old"
                  title="The Ancesor"
                  description="You have a pretty old wallet—more than 4 years since the first transaction."
                />
                <Achievement
                  emoji="old"
                  title="Big Spender"
                  description={`This wallet has a total spendings of more than Ξ${
                    Math.round(wallet.spendings / 10) * 10
                  }.`}
                />
              </div>
            </section>
            <section className="stats">
              <div className="container">
                <h2>Wallet Stats</h2>
              </div>
              <Stats
                totalTransactions={wallet.totalTransactions}
                averageTransactionTime={wallet.averageTransactionTime}
                transactionsPerMonth={wallet.transactionsPerMonth}
                balance={wallet.balance}
                turnover={wallet.turnover}
                age={wallet.age}
                maxTransactionTime={wallet.maxTransactionTime}
                timeFromLastTransaction={wallet.timeFromLastTransaction}
                lastMonthTransactions={wallet.lastMonthTransactions}
                nftHolding={wallet.nftHolding}
                nftTrading={wallet.nftTrading}
                nftWorth={wallet.nftWorth}
                tokensHolding={wallet.tokensHolding}
                deployedContracts={wallet.deployedContracts}
              />
            </section>
          </div>

          <div className={`container wallet`}>
            <User
              userpick={wallet.userpick}
              address={wallet.address}
              balance={wallet.balance}
              turnover={wallet.turnover}
              blockchain={wallet.blockchain}
              age={Math.round(wallet.age / 12)}
            />
            <Recent recentActivity={wallet.recentActivity} />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://nomis.vercel.app/api/${context.query.address}`
  );
  const wallet = await res.json();
  return { props: { wallet } };
}
