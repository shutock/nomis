export default function UserMeta({ balance, blockchain, turnover, age }) {
  return (
    <div className="container meta">
      <div className="container balance">
        <h4 className={`metaTitle ${blockchain}`}>{balance}</h4>
        <span className="footnote">Balance</span>
      </div>
      <div className="container turnover">
        <h4 className={`metaTitle ${blockchain}`}>{turnover}</h4>
        <span className="footnote">Turnover</span>
      </div>
      <div className="container age">
        <h4 className="metaTitle">{age}</h4>
        <span className="footnote">Wallet Age</span>
      </div>
    </div>
  );
}
