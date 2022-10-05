import React from "react";

export default function DataTable({ wallet }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const stats = [
    {
      title: "totalTransactions",
      description: "Total transactions on wallet",
      value: wallet.stats.totalTransactions,
      units: "Number",
    },
    {
      title: "averageTransactionTime",
      description: "Average time interval between transactions",
      value: wallet.stats.averageTransactionTime,
      units: "Hours",
    },
    {
      title: "transactionsPerMonth",
      description: "Average transaction per months",
      value: wallet.stats.transactionsPerMonth,
      units: "Number",
    },
    {
      title: "balance",
      description: "Wallet's current balance",
      value: wallet.stats.balance,
      units: "ETH",
    },
    {
      title: "walletTurnover",
      description: "The movement of funds on the wallet",
      value: wallet.stats.walletTurnover,
      units: "ETH",
    },
    {
      title: "walletAge",
      description: "Wallet age",
      value: wallet.stats.walletAge,
      units: "months",
    },
    {
      title: "maxTransactionTime",
      description: "Maximum time interval between transactions",
      value: wallet.stats.maxTransactionTime,
      units: "Hours",
    },
    {
      title: "minTransactionTime",
      description: "Minimum time interval between transactions",
      value: wallet.stats.minTransactionTime,
      units: "Hours",
    },
    {
      title: "timeFromLastTransaction",
      description: "Time since last transaction",
      value: wallet.stats.timeFromLastTransaction,
      units: "Months",
    },
    {
      title: "lastMonthTransactions",
      description: "Last month transactions",
      value: wallet.stats.lastMonthTransactions,
      units: "Number",
    },
    {
      title: "nftHolding",
      description: "Total NFTs on wallet",
      value: wallet.stats.nftHolding,
      units: "Number",
    },
    {
      title: "nftTrading",
      description: "NFT trading activity",
      value: wallet.stats.nftTrading,
      units: "ETH",
    },
    {
      title: "nftWorth",
      description: "NFT worth on wallet",
      value: wallet.stats.nftWorth,
      units: "ETH",
    },
    {
      title: "tokensHolding",
      description: "Value of all holding tokens",
      value: wallet.stats.tokensHolding,
      units: "Number",
    },
    {
      title: "deployedContracts",
      description: "Amount of deployed smart-contracts",
      value: wallet.stats.deployedContracts,
      units: "Number",
    },
  ];
  return (
    <div className="DataTable">
      <h2>Wallet Stats</h2>
      <div className="table">
        <div className="head">
          <div className="parameter">Parameter</div>
          <div className="value">Value</div>
          <div className="Description">Description</div>
        </div>
        <ul className={`body ${isVisible ? "isVisible" : ""}`}>
          {stats.map((item) => (
            <li className="item" key={item.title}>
              <div className="parameter">{item.title}</div>
              <div className="value">{Math.round(item.value * 100) / 100}</div>
              <div className="description">
                {item.description}
                <span className="units">{item.units}</span>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
