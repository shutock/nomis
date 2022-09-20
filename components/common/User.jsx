import Image from "next/image";

import UserAddress from "./UserAddress";
import UserMeta from "./UserMeta";

export default function User({
  address,
  userpick,
  balance,
  blockchain,
  turnover,
  age,
}) {
  return (
    <div className="container user">
      <div className="userpick">
        {/* <Image src={userpick} width={144} height={144} alt="NFT userpick" /> */}
        <img src={userpick} alt="NFT userpick" />
      </div>
      <UserAddress address={address} />
      <UserMeta
        balance={balance}
        blockchain={blockchain}
        turnover={turnover}
        age={age}
      />
    </div>
  );
}
