export default function UserStats({ wallet, blockchain }) {
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
            <div className="mo">{wallet.stats.walletAge}</div>
            <span>Wallet Age</span>
          </div>
        </div>
      ) : (
        "No data to show"
      )}
    </>
  );
}
