import React from "react";

import MainLayout from "../../layouts/Main";

import Input from "../../components/global/Input";

import WalletData from "../../components/WalletData";
import WalletUser from "../../components/WalletUser";

export default function Home({ success, blockchain, fullAddress, wallet }) {
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
        "• • •" +
        fullAddress[fullAddress.length - 3] +
        fullAddress[fullAddress.length - 2] +
        fullAddress[fullAddress.length - 1]
      : fullAddress;
  return (
    <MainLayout title={`${address}`}>
      <div className="wrapper">
        <Input blockchain={blockchain} fullAddress={fullAddress} />
        {success ? (
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

export async function getServerSideProps(context) {
  const blockchain = await context.query.wallet[0];
  const fullAddress = await context.query.wallet[1];

  const res = await fetch(
    `https://api.nomis.cc/api/v1/${blockchain}/wallet/${fullAddress}/score`
  );

  const json = await res.json();
  const success = json.succeeded;
  const wallet = json.data;

  return { props: { success, blockchain, fullAddress, wallet } };
}
