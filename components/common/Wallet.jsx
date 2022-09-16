import Image from "next/image";

export default function Wallet({ address, userpick, balance, turnover, age }) {
  return (
    <>
      <section>
        <div className="container userpick">
          <Image src={userpick} alt="NFT userpick" width={1280} height={1280} />
        </div>

        <div className="container adress">
          <h4>{address}</h4>
        </div>

        <div className="container meta">
          <div className="container balance">
            <h5>{balance}</h5>
            <span>Balance</span>
          </div>

          <div className="container turnover">
            <h5>{turnover}</h5>
            <span>Turnover</span>
          </div>

          <div className="container age">
            <h5>{age}</h5>
            <span>Wallet Age</span>
          </div>
        </div>
      </section>
    </>
  );
}
