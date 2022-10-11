import React from "react";

import MainLayout from "../../layouts/Main";

import Input from "../../components/global/Input";

import WalletData from "../../components/WalletData";
import WalletUser from "../../components/WalletUser";

export async function getServerSideProps(context) {
  const blockchain = await context.query.wallet[0];
  const fullAddress = await context.query.wallet[1];

  return { props: { blockchain, fullAddress } };
}

// export async function getWalletData({ blockchain, fullAddress }) {
//   const res = await fetch(
//     `https://api.nomis.cc/api/v1/${blockchain}/wallet/${fullAddress}/score`
//   );
//   const { json } = await res.json();
//   return json;
// }

export default function Scored({ blockchain, fullAddress }) {
  const [wallet, setWallet] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   fetch(
  //     `https://api.nomis.cc/api/v1/${blockchain}/wallet/${fullAddress}/score`,
  //     { mode: "no-cors" }
  //   ).then((response) => {
  //     const json = response.json();
  //     console.log(response);
  //     setWallet(json.data);
  //     setSuccess(json.succeeded);
  //   });
  // }, []);

  React.useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch(
        `https://api.nomis.cc/api/v1/${blockchain}/wallet/${fullAddress}/score`,
        { mode: "no-cors" }
      );
      setWallet(await response.json()).then(setLoading(false));
      setSuccess(wallet.succeeded);
      console.log(wallet);
    }
    getData();
  }, []);

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
  return (
    <MainLayout title={`${address}`}>
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
    </MainLayout>
  );
}
