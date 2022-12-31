import React from "react";
import { MainLayout, WithSidebar, StatsCards, ProfileCard } from "@shared/ui";
import { useFormatScore } from "@shared/utils";
import {
  connectSetStats,
  connectSetWallet,
  connectSetScore,
  connectSetReset,
  IConnectUserWallet,
  connectUserSelector,
} from "@entities/connect-user";
import { useEnsAddress, useEnsAvatar, useEnsName } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { connectBlockchainsList, scoreBlockchainsList } from "@shared/lib";
import { scoreApi } from "@shared/api";

export const Id = () => {
  const user = useSelector(connectUserSelector);
  const dispatch = useDispatch();
  const blockchain = scoreBlockchainsList.find(
    (b) => b.name === user.wallet?.blockchain?.name
  )?.apiSlug;

  const { data: api } = scoreApi.useWalletScoreQuery({
    address: user.wallet?.address!,
    blockchain: blockchain!,
  });

  React.useEffect(() => {
    if (api) {
      dispatch(connectSetStats(api));
      dispatch(connectSetScore(api));
    }
  }, [api, dispatch]);

  if (!user.connection.connected)
    return (
      <MainLayout>
        <WithSidebar>You Need to Connect Wallet First</WithSidebar>
      </MainLayout>
    );

  if (user.connection.connected && !user.score)
    return (
      <MainLayout>
        <WithSidebar>Loading...</WithSidebar>
      </MainLayout>
    );

  return (
    <MainLayout>
      <WithSidebar>
        <StatsCards user={user} />
        <ProfileCard user={user} />
      </WithSidebar>
    </MainLayout>
  );
};
