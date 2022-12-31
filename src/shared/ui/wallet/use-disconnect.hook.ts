import { connectUserSelector } from "@entities/connect-user";
import { useUnstoppableDomainsConnect } from "@features/unstoppable-domains";
import { useEvmConnect } from "@features/evm";
import { useSelector } from "react-redux";

export const useDisconnect = () => {
  const { disconnect: evmDisconnect } = useEvmConnect();
  const { disconnect: udDisconnect } = useUnstoppableDomainsConnect();
  const user = useSelector(connectUserSelector);
  const { type } = user.connection;

  function disconnect() {
    if (type === "evm") evmDisconnect();
    else udDisconnect();
  }

  return { disconnect };
};
