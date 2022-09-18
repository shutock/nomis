import Image from "next/image";

import Recent from "./Recent";

export default function Wallet({
  address,
  userpick,
  balance,
  blockchain,
  turnover,
  age,
}) {
  return (
    <>
      <div className="mainInfo">
        <div className="container userpick">
          <Image src={userpick} alt="NFT userpick" width={1280} height={1280} />
        </div>

        <div className="container address">
          <h4>{address}</h4>
        </div>
      </div>

      <div className="container meta">
        <div className={`container ${blockchain}`}>
          <h5>{balance}</h5>
          <span className="footnote">Balance</span>
        </div>

        <div className={`container ${blockchain}`}>
          <h5>{turnover}</h5>
          <span className="footnote">Turnover</span>
        </div>

        <div className="container age">
          <h5>{age}</h5>
          <span className="footnote">Wallet Age</span>
        </div>
      </div>
    </>
  );
}
