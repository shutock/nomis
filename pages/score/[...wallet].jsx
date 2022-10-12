import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const [data, setData] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.nomis.cc/api/v1/${blockchain}/wallet/${fullAddress}/score`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  () => setWallet(data.data);
  () => setSuccess(data.succeeded);

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
            <h2>Please Wait...</h2>
            <p>Our calculations are not that fast. Give us a minute</p>
          </section>
        )}
      </div>
      {error && (
        <section className="message error">
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
      )}
      {wallet && !success && (
        <section className="message noSuccess">
          <h2>There is No {address}</h2>
          <div className="paragraph">
            <p>
              We can't find {fullAddress} on {blockchain} blockchain.
            </p>
            <p>
              If you think it's wrong please{" "}
              <Link href="mailto:gm@nomis.cc">
                <a>contact us</a>
              </Link>{" "}
              .
            </p>
          </div>
          <button onClick={tryAgainHandler} className="tryAgain">
            Try Again
          </button>
        </section>
      )}
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
