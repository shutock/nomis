import { useState, useEffect } from "react";

import dynamic from "next/dynamic";

import MainLayout from "../../layouts/MainLayout";

import User from "../../components/common/User";
import Recent from "../../components/common/Recent";
import Stats from "../../components/common/Stats";

import InputAddress from "../../components/general/InputAddress";

import { Score, Pulse } from "../../components/common/Card";
const Achievement = dynamic(() => import("../../components/common/Card"), {
  ssr: false,
});

export default function Scored({
  score,
  stats,
  success,
  blockchain,
  address,
  exception,
  supportMessage,
  noData,
  badGateway,
}) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const [isStatsVisible, setIsStatsVisible] = useState(false);

  let shortAddress;

  if (address.length > 16) {
    shortAddress =
      address[0] +
      address[1] +
      address[2] +
      "..." +
      address[address.length - 3] +
      address[address.length - 2] +
      address[address.length - 1];
  } else shortAddress = address;

  return (
    <MainLayout title={`${shortAddress}'s Score`}>
      <div className="wrapper">
        <section className="getScore inScored">
          <InputAddress />
        </section>

        {success === true ? (
          <section className={`scored ${scroll ? "scrolledScored" : ""}`}>
            {noData === false ? (
              <div className="container information">
                <section className="highlights">
                  <div className="container">
                    <h2>Highlights</h2>
                  </div>
                  <div className="container cards">
                    <Score score={score} />
                    <Pulse />
                    <Achievement
                      emoji="old"
                      title="The Ancesor"
                      description="You have a pretty old wallet—more than 4 years since the first transaction."
                    />
                    <Achievement
                      emoji="old"
                      title="Big Spender"
                      description={`This wallet has a total spendings of more than Ξ${
                        Math.round(
                          (stats.walletTurnover - stats.balance) / 10
                        ) * 10
                      }.`}
                    />
                  </div>
                </section>
                <section className="stats">
                  <div className="container">
                    <h2>Wallet Stats</h2>
                  </div>
                  <Stats
                    isOpen={isStatsVisible}
                    totalTransactions={
                      Math.round(stats.totalTransactions * 100) / 100
                    }
                    averageTransactionTime={
                      Math.round(stats.averageTransactionTime * 100) / 100
                    }
                    transactionsPerMonth={
                      Math.round(stats.transactionsPerMonth * 100) / 100
                    }
                    balance={Math.round(stats.balance * 100) / 100}
                    walletTurnover={
                      Math.round(stats.walletTurnover * 100) / 100
                    }
                    walletAge={Math.round(stats.walletAge * 100) / 100}
                    maxTransactionTime={
                      Math.round(stats.maxTransactionTime * 100) / 100
                    }
                    timeFromLastTransaction={
                      Math.round(stats.timeFromLastTransaction * 100) / 100
                    }
                    lastMonthTransactions={
                      Math.round(stats.lastMonthTransactions * 100) / 100
                    }
                    nftHolding={Math.round(stats.nftHolding * 100) / 100}
                    nftTrading={Math.round(stats.nftTrading * 100) / 100}
                    nftWorth={Math.round(stats.nftWorth * 100) / 100}
                    tokensHolding={Math.round(stats.tokensHolding * 100) / 100}
                    deployedContracts={
                      Math.round(stats.deployedContracts * 100) / 100
                    }
                  />
                  <a
                    onClick={() => setIsStatsVisible(!isStatsVisible)}
                    className="button"
                  >{`${
                    isStatsVisible === true ? "Minify Stats" : "Open Stats"
                  }`}</a>
                </section>
              </div>
            ) : (
              <div className="container inactive information">
                <section className="highlights">
                  <h2>Wallet is Inactive</h2>
                  <p>This wallet has no data to show.</p>
                </section>
              </div>
            )}

            <div className={`container wallet`}>
              <User
                address={address}
                shortAddress={shortAddress}
                balance={Math.round(stats.balance * 100) / 100}
                turnover={Math.round(stats.walletTurnover * 100) / 100}
                blockchain={blockchain}
                age={Math.round(stats.walletAge / 365)}
              />

              <Recent />
            </div>
          </section>
        ) : (
          <section className="noWallet">
            <h2>There is no {shortAddress}</h2>
            <p>
              We can&apost find {address} wallet on {blockchain} blockchain.
            </p>
          </section>
        )}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const blockchain = context.query.wallet[0];
  const address = context.query.wallet[1];

  const res = await fetch(
    `https://api.nomis.cc/api/v1/${blockchain}/wallet/${address}/score`
  );

  const data = await res.json();
  const success = data.succeeded;

  if (success === true) {
    const wallet = data.data;
    const Data = !wallet.noData;
    const score = wallet.score * 100;

    if (Data === true) {
      const stats = wallet.stats;
      const noData = false;

      return {
        props: { score, stats, success, blockchain, address, noData },
      };
    } else {
      const noData = true;

      return { props: { score, success, blockchain, address, noData } };
    }
  } else {
    const exception = data.exception;
    const supportMessage = data.supportMessage;

    return {
      props: { success, exception, supportMessage, address, blockchain },
    };
  }
}
