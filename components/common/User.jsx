import Image from "next/image";

import UserAddress from "./UserAddress";
import UserMeta from "./UserMeta";

export default function User({
  address,
  shortAddress,
  userpick,
  balance,
  blockchain,
  turnover,
  age,
}) {
  return (
    <div className="container user">
      <div className="userpick">
        <Image
          src="/userpick.svg"
          width={144}
          height={144}
          alt="NFT userpick"
        />
      </div>
      <UserAddress address={address} shortAddress={shortAddress} />
      <UserMeta
        balance={balance}
        blockchain={blockchain}
        turnover={turnover}
        age={age}
      />
    </div>
  );
}
