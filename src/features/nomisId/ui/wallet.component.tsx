import React from "react";
import { useToast } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import Connect from "./connect.component";
import Profile from "./profile.component";

export const Wallet = () => {
  const { isConnected, status } = useAccount();
  const toast = useToast();

  const [isConnecting, setIsConnecting] = React.useState(false);
  const [isDisconnecting, setIsDisconnecting] = React.useState(false);

  React.useEffect(() => {
    (isConnecting || isDisconnecting) &&
      toast({
        title: `${status[0].toUpperCase() + status.slice(1, status.length)}`,
        status:
          status === "connected"
            ? "success"
            : status === "disconnected"
            ? "error"
            : "loading",
        duration:
          status === "connecting" || status === "reconnecting" ? 500 : 1000,
        isClosable: true,
        position: "bottom-left",
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, toast]);

  return isConnected ? (
    <Profile setIsDisconnecting={setIsDisconnecting} />
  ) : (
    <Connect setIsConnecting={setIsConnecting} />
  );
};

export default Wallet;
