import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Lottie from "lottie-react";

import errorAnimation from "../../utilities/error.json";
import loadingAnimation from "../../utilities/loading.json";
import notFoundAnimation from "../../utilities/notFound.json";

import MainLayout from "../../layouts/Main";

import Input from "../../components/global/Input";

import WalletData from "../../components/WalletData";
import WalletUser from "../../components/WalletUser";

export async function getServerSideProps(context) {
  const blockchain = await context.query.wallet[0];
  const fullAddress = await context.query.wallet[1];

  return { props: { blockchain, fullAddress } };
}

export default function Scored({ blockchain, fullAddress }) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);
  const [success, setSuccess] = React.useState(false);

  // const res = {
  //   data: {
  //     score: 0.42218833388499993,
  //     stats: {
  //       noData: false,
  //       deployedContracts: 1,
  //       balance: 0.008547790366472762,
  //       balanceUSD: 11.39403360270086229076,
  //       walletAge: 53,
  //       totalTransactions: 75,
  //       totalRejectedTransactions: 0,
  //       averageTransactionTime: 515.9115990990991,
  //       maxTransactionTime: 32901.63333333333,
  //       minTransactionTime: 0,
  //       walletTurnover: 44.970909384880461895,
  //       turnoverIntervals: [
  //         {
  //           startDate: "2018-06-03T16:06:05",
  //           endDate: "2018-07-03T16:06:05",
  //           amountSumValue: 41.745,
  //           amountOutSumValue: 26.815,
  //           amountInSumValue: 14.93,
  //           count: 16,
  //         },
  //         {
  //           startDate: "2018-07-03T16:06:05",
  //           endDate: "2018-08-03T16:06:05",
  //           amountSumValue: 1.5,
  //           amountOutSumValue: 1.5,
  //           amountInSumValue: 0,
  //           count: 3,
  //         },
  //         {
  //           startDate: "2018-08-03T16:06:05",
  //           endDate: "2018-09-03T16:06:05",
  //           amountSumValue: 0.196,
  //           amountOutSumValue: 0.196,
  //           amountInSumValue: 0,
  //           count: 2,
  //         },
  //         {
  //           startDate: "2022-05-03T16:06:05",
  //           endDate: "2022-06-03T16:06:05",
  //           amountSumValue: 0.038183489928165635,
  //           amountOutSumValue: 0.014006489928165635,
  //           amountInSumValue: 0.024177,
  //           count: 6,
  //         },
  //         {
  //           startDate: "2022-06-03T16:06:05",
  //           endDate: "2022-07-03T16:06:05",
  //           amountSumValue: 1.29110562,
  //           amountOutSumValue: 0.615,
  //           amountInSumValue: 0.67610562,
  //           count: 9,
  //         },
  //         {
  //           startDate: "2022-07-03T16:06:05",
  //           endDate: "2022-08-03T16:06:05",
  //           amountSumValue: 0.16,
  //           amountOutSumValue: 0.16,
  //           amountInSumValue: 0,
  //           count: 11,
  //         },
  //         {
  //           startDate: "2022-08-03T16:06:05",
  //           endDate: "2022-09-03T16:06:05",
  //           amountSumValue: 0.01,
  //           amountOutSumValue: 0.01,
  //           amountInSumValue: 0,
  //           count: 11,
  //         },
  //         {
  //           startDate: "2022-09-03T16:06:05",
  //           endDate: "2022-10-03T16:06:05",
  //           amountSumValue: 0.03062027495229626,
  //           amountOutSumValue: 0.03062027495229626,
  //           amountInSumValue: 0,
  //           count: 15,
  //         },
  //         {
  //           startDate: "2022-10-03T16:06:05",
  //           endDate: "2022-11-03T16:06:05",
  //           amountSumValue: 0,
  //           amountOutSumValue: 0,
  //           amountInSumValue: 0,
  //           count: 2,
  //         },
  //       ],
  //       nftHolding: 11,
  //       timeFromLastTransaction: 0,
  //       nftTrading: -0.000681063374797192,
  //       nftWorth: 0,
  //       lastMonthTransactions: 5,
  //       lastYearTransactions: 54,
  //       transactionsPerMonth: 1.4150943396226414,
  //       tokensHolding: 23,
  //     },
  //   },
  //   messages: ["Got ethereum wallet score."],
  //   succeeded: true,
  // };

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.nomis.cc/api/v1/${blockchain}/wallet/${fullAddress}/score`
          // { mode: "no-cors" }
        ).then((response) => response.json());

        setError(null);
        // console.log(response);
        // console.log(response.data);

        setWallet(response.data);
        setSuccess(response.succeeded);
      } catch (err) {
        setError(err.message);
        // setWallet(res.data);
        // setSuccess(res.succeeded);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // console.log(`Wallet: ${wallet}\nSuccess: ${success}`);git

  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 384);
    });
  }, []);

  const address =
    fullAddress.length > 16
      ? fullAddress[0] +
        fullAddress[1] +
        fullAddress[2] +
        " · · · " +
        fullAddress[fullAddress.length - 3] +
        fullAddress[fullAddress.length - 2] +
        fullAddress[fullAddress.length - 1]
      : fullAddress;

  const router = useRouter();

  const tryAgainHandler = () => {
    router.reload();
  };

  return (
    <MainLayout title={`${address}`}>
      <div className="wrapper">
        <Input blockchain={blockchain} fullAddress={fullAddress} />
        {loading && (
          <section className="message loading">
            <Lottie animationData={loadingAnimation} loop={true} size="240px" />
            <h2>Please Wait...</h2>
            <p>Our calculations are not that fast. Give us a minute.</p>
          </section>
        )}
        {error && (
          <section className="message error">
            <Lottie animationData={errorAnimation} loop={true} size="240px" />
            <h2>There is an Error</h2>
            <p>We have an error: {error}.</p>
            <button onClick={tryAgainHandler} className="tryAgain">
              Try Again
            </button>
          </section>
        )}
        {success && (
          <div className="scored">
            <WalletData
              wallet={wallet}
              blockchain={blockchain}
              fullAddress={fullAddress}
            />
            <WalletUser
              wallet={wallet}
              blockchain={blockchain}
              address={address}
              fullAddress={fullAddress}
            />
            <div className={`mobile ${isScrolled ? "isScrolled" : ""}`}>
              <WalletUser
                wallet={wallet}
                blockchain={blockchain}
                address={address}
                fullAddress={fullAddress}
              />
            </div>
          </div>
        )}
        {wallet && !success && (
          <section className="message noSuccess">
            <Lottie
              animationData={notFoundAnimation}
              loop={true}
              size="240px"
            />
            <h2>There is No {address}</h2>
            <div className="paragraph">
              <p>
                We can't find {fullAddress} on {blockchain} blockchain.
              </p>
              <p>
                If you think it's wrong please{" "}
                <Link href="mailto:gm@nomis.cc">
                  <a>contact us</a>
                </Link>
                .
              </p>
            </div>
            <button onClick={tryAgainHandler} className="tryAgain">
              Try Again
            </button>
          </section>
        )}
      </div>
    </MainLayout>
  );
}

/* 
<div className="wrapper">
        <Input blockchain={blockchain} fullAddress={fullAddress} />
        {loading ? (
          <section className="error">
            <h2>Please wait</h2>
            <p>Our calculations are not that fast. Give us a minute</p>
          </section>
        ) : success ? (
          <div className="scored">
            <WalletData
              wallet={wallet}
              blockchain={blockchain}
              fullAddress={fullAddress}
            />
            <WalletUser
              wallet={{ wallet }}
              blockchain={blockchain}
              address={address}
              fullAddress={fullAddress}
            />
            <div className={`mobile ${isScrolled ? "isScrolled" : ""}`}>
              <WalletUser
                wallet={{ wallet }}
                blockchain={blockchain}
                address={address}
                fullAddress={fullAddress}
              />
            </div>
          </div>
        ) : (
          <section className="error">
            <h2>There is no {address}</h2>
            <p>
              We can't find {fullAddress} on {blockchain} blockchain. Try
              another wallet or contact us.
            </p>
          </section>
        )}
      </div>
 */
