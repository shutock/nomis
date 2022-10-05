import Image from "next/image";

import UserAddress from "./UserAddress";
import UserStats from "./UserStats";

import userpick from "../public/userpick.svg";

export default function WalletUser({
  wallet,
  blockchain,
  address,
  fullAddress,
}) {
  return (
    <section className="WalletUser">
      <div className="bio">
        <div className="userpick">
          <Image src={userpick} />
        </div>
        <div className="meta">
          <UserAddress address={address} fullAddress={fullAddress} />
          <UserStats wallet={wallet} blockchain={blockchain} />
        </div>
      </div>
    </section>
  );
}
