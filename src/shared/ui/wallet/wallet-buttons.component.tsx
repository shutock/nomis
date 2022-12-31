import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { connectUserSelector } from "@entities/connect-user";

export const WalletButtons = () => {
  const ProfileButton = dynamic(() => import("./profile-button.component"), {
    ssr: false,
  });
  const ConnectButton = dynamic(() => import("./connect-button.component"), {
    ssr: false,
  });

  const user = useSelector(connectUserSelector);

  if (user.connection.connected) return <ProfileButton />;

  return <ConnectButton />;
};
