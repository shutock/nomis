import { useEffect, useState } from "react";
import walletDefault from "../api/artyshatilov.eth.json";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import MainLayout from "../../layouts/MainLayout";

import Wallet from "../../components/common/Wallet";

import { Score, Pulse } from "../../components/common/Card";
const Achievement = dynamic(() => import("../../components/common/Card"), {
  ssr: false,
});

export default function Scored() {
  const router = useRouter();
  const { address } = router.query;

  const apiPath = `/api/${address}`;
  console.log(apiPath);

  const [wallet, setWallet] = useState(walletDefault);

  useEffect(() => {
    fetch(apiPath)
      .then((res) => res.json())
      .then((wallet) => {
        setWallet(wallet);
      });
  }, []);

  console.log(wallet);

  return (
    <MainLayout title="Get Score">
      <div className="wrapper">
        <section className="getScore">
          <div className="container information">
            <section className="highlights">
              <div className="container">
                <h4>Highlights</h4>
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

          <div className="container wallet">
            <Wallet
              userpick={wallet.userpick}
              address={wallet.address}
              balance={wallet.balance}
              turnover={wallet.turnover}
              age={Math.round(wallet.spendings / 10) * 10}
            />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
