import React from "react";
import { IAddressProps } from "pages/[blockchain]/[address].page";
import { MainLayout, WithSidebar, StatsCards, ProfileCard } from "@shared/ui";
import { useFormatScore } from "@shared/utils";
import {
  searchSetStats,
  searchSetWallet,
  searchSetScore,
  searchSetReset,
  ISearchUserWallet,
  searchUserSelector,
} from "@entities/search-user";
import { useEnsAddress, useEnsAvatar, useEnsName } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { scoreBlockchainsList } from "@shared/lib";
import { scoreApi } from "@shared/api";

export const Address = (props: IAddressProps) => {
  const { query } = props;
  const dispatch = useDispatch();

  const blockchain = scoreBlockchainsList.find(
    (blockchain) => blockchain.apiSlug === query.blockchain
  );

  const [address, setAddress] = React.useState({
    data: "",
    isLoading: true,
  });
  const [name, setName] = React.useState({
    data: "",
    isLoading: true,
  });
  const [avatar, setAvatar] = React.useState({
    data: "",
    isLoading: true,
  });

  const wallet: ISearchUserWallet = {
    address: address.data,
    blockchain: blockchain,
    avatar: avatar.data,
    name: name.data,
  };

  const { data: addressData, isLoading: addressLoading } = useEnsAddress({
    name: query.address,
  });
  const { data: nameData, isLoading: nameLoading } = useEnsName({
    address: query.address,
  });
  const { data: avatarData, isLoading: avatarLoading } = useEnsAvatar({
    address: `0x${address.data.slice(2, address.data.length)}`,
  });

  const [
    getScore,
    { data: apiData, isLoading: apiLoading, isError: apiError },
  ] = scoreApi.useLazyWalletScoreQuery();
  const formatedScore = useFormatScore(apiData?.score);

  React.useEffect(() => {
    setAddress({
      data: addressData ? addressData : query.address,
      isLoading: addressLoading,
    });
    setName({
      data: nameData ? nameData : query.address,
      isLoading: nameLoading,
    });
    setAvatar({
      data: avatarData ? avatarData : "",
      isLoading: avatarLoading,
    });
  }, [
    addressData,
    addressLoading,
    avatarData,
    avatarLoading,
    nameData,
    nameLoading,
    query.address,
  ]);

  React.useEffect(() => {
    addressData &&
      getScore({
        address: address.data,
        blockchain: query.blockchain,
      });
  }, [address.data, addressData, getScore, query.address, query.blockchain]);

  React.useEffect(() => {
    dispatch(searchSetReset());
    if (apiData) {
      dispatch(searchSetWallet(wallet));
      dispatch(searchSetStats(apiData));
      formatedScore && dispatch(searchSetScore(formatedScore));
    }
  }, [apiData, dispatch, formatedScore]);

  const user = useSelector(searchUserSelector);

  if (avatarLoading || nameLoading || addressLoading || !apiData)
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
