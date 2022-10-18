import DataCards from "./DataCards";
import DataTable from "./DataTable";

export default function WalletData({ wallet, blockchain, fullAddress }) {
  return (
    <section className="WalletData">
      <DataCards wallet={wallet} blockchain={blockchain} />
      {!wallet.stats.noData ? (
        <DataTable wallet={wallet} />
      ) : (
        <section className="noData">
          <div className="container">
            <h3>There is no data to show</h3>
            <p>
              {fullAddress} is a new or innactive wallet on {blockchain}{" "}
              blockchain. Try another wallet.
            </p>
          </div>
        </section>
      )}
    </section>
  );
}
