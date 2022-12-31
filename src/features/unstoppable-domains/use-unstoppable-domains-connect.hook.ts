import React from "react";
import UAuth from "@uauth/js";
import { useDispatch } from "react-redux";
import {
  IConnectUserWallet,
  connectSetWallet,
  connectSetConnection,
  connectSetReset,
} from "@entities/connect-user";
import { IdToken } from "@uauth/js/build/types";
import { unstoppableDomainsClient } from "./unstoppable-domains-client";
import { connectBlockchainsList } from "@shared/lib";

const uauth = new UAuth(unstoppableDomainsClient);

export const useUnstoppableDomainsConnect = () => {
  const dispatch = useDispatch();

  const [udData, setUdData] = React.useState<IdToken | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState<unknown | undefined>(undefined);

  const disconnect = async () => {
    await uauth.logout();
    dispatch(connectSetReset());
  };

  const connect = async () => {
    try {
      const ud = await uauth.loginWithPopup();
      console.log(ud);
      setUdData(ud.idToken);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(error);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (udData) {
      const wallet: IConnectUserWallet = {
        address: udData.wallet_address,
        avatar: udData.picture,
        name: udData.sub,
        blockchain: connectBlockchainsList.find(
          (blockchain) => blockchain.id === 1
        ),
      };

      dispatch(connectSetWallet(wallet));
      dispatch(
        connectSetConnection({ connected: true, type: "unstoppabledomains" })
      );
    }
  }, [dispatch, udData]);

  return {
    connect,
    disconnect,
    connectLoading: isLoading,
    connectError: isError,
  };
};
