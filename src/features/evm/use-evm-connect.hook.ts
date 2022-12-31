import { connectBlockchainsList } from "@shared/lib";
import React from "react";
import { useDispatch } from "react-redux";
import {
  IConnectUserWallet,
  connectSetWallet,
  connectSetConnection,
  connectSetReset,
} from "@entities/connect-user";
import { useConnect, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export const useEvmConnect = () => {
  const { connect: _connect, data, isLoading, isError } = useConnect();
  const { disconnect: _disconnect } = useDisconnect();
  const dispatch = useDispatch();

  const { data: avatar } = useEnsAvatar({ address: data?.account });
  const { data: name } = useEnsName({ address: data?.account });

  const disconnect = () => {
    _disconnect();
    dispatch(connectSetReset());
  };

  const connect = ({ connector }: { connector: any }) => {
    _connect({ connector });
  };

  React.useEffect(() => {
    if (data) {
      const wallet: IConnectUserWallet = {
        address: data?.account,
        avatar: avatar!,
        name: name!,
        blockchain: connectBlockchainsList.find(
          (blockchain) => blockchain.id === data?.chain.id
        ),
      };
      dispatch(connectSetWallet(wallet));
      dispatch(connectSetConnection({ connected: true, type: "evm" }));
    }
  }, [avatar, data, dispatch, name]);

  return {
    connect,
    disconnect,
    connectLoading: isLoading,
    connectError: isError,
  };
};
