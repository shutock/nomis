import { useState, useEffect } from "react";

import dynamic from "next/dynamic";

import MainLayout from "../../layouts/MainLayout";

import Wallet from "../../components/common/Wallet";

import { Score, Pulse } from "../../components/common/Card";
const Achievement = dynamic(() => import("../../components/common/Card"), {
  ssr: false,
});

export default function Scored({ wallet }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 32);
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
                {/* <Pulse activity={wallet.activity} /> */}
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
          </div>

          <div className={`container wallet ${scroll ? "scrolledWallet" : ""}`}>
            <Wallet
              userpick={wallet.userpick}
              address={wallet.address}
              balance={wallet.balance}
              turnover={wallet.turnover}
              blockchain={wallet.blockchain}
              age={Math.round(wallet.age / 12)}
            />
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
