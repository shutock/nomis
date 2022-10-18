import React from "react";

export default function UserStats({ wallet, blockchain }) {
  const [isMonth, setIsMonth] = React.useState();
  wallet.stats.walletAge > 24
    ? () => setIsMonth(false)
    : () => setIsMonth(true);

  return (
    <>
      {!wallet.stats.noData ? (
        <div className="UserStats">
          <div className={`balance ${blockchain}`}>
            {wallet.stats.balance > 1000
              ? Math.round(wallet.stats.balance / 10) / 100 + "k"
              : Math.round(wallet.stats.balance * 100) / 100}
            <span>Balance</span>
          </div>
          <div className={`turnover ${blockchain}`}>
            {wallet.stats.walletTurnover > 1000
              ? Math.round(wallet.stats.walletTurnover / 10) / 100 + "k"
              : Math.round(wallet.stats.walletTurnover * 100) / 100}
            <span>Wallet Turnover</span>
          </div>
          <div className="age">
            {isMonth === true
              ? wallet.stats.walletAge +
                " month" +
                (wallet.stats.walletAge > 1 ? "s" : "")
              : Math.floor(wallet.stats.walletAge / 12) +
                "y " +
                (wallet.stats.walletAge -
                  Math.floor(wallet.stats.walletAge / 12) * 12 +
                  "m")}
            <span>Wallet Age</span>
          </div>
        </div>
      ) : (
        "No data to show"
      )}
    </>
  );
}
