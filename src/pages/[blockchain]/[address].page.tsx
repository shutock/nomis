import React from "react";
import { IAddressProps } from "../../../pages/[blockchain]/[address].page";
import { MainLayout, WithSidebar } from "../../layout";
import {
  useLazyWalletScoreQuery,
  scoreBlockchainsList,
  useFormatScore,
} from "../../shared";
import { Cards } from "./cards";
import {
  IUserWallet,
  setStats,
  setWallet,
  setScore,
  setReset,
} from "../../entities";
import { useEnsAddress, useEnsAvatar, useEnsName } from "wagmi";
import { useDispatch } from "react-redux";

export const Address = (props: IAddressProps) => {
  const { query } = props;
  const dispatch = useDispatch();

  const blockchain = scoreBlockchainsList.find(
    (blockchain) => blockchain.apiSlug === query.blockchain
  )?.apiSlug;

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

  const wallet: IUserWallet = {
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
  ] = useLazyWalletScoreQuery();
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

  const ensLoading =
    address.isLoading || name.isLoading || avatar.isLoading ? true : false;

  React.useEffect(() => {
    !ensLoading &&
      getScore({
        address: address.data,
        blockchain: query.blockchain,
      });
  }, [address.data, ensLoading, getScore, query.blockchain]);

  React.useEffect(() => {
    dispatch(setReset());
    if (apiData) {
      dispatch(setWallet(wallet));
      dispatch(setStats(apiData));
      dispatch(setScore(formatedScore));
    }
  }, [apiData, dispatch, formatedScore]);

  return (
    <MainLayout>
      <WithSidebar>
        {ensLoading && "Your request is in the progress..."}
        {!ensLoading && apiLoading && "Your request is in the progress..."}
        {!ensLoading && !apiLoading && <Cards />}
      </WithSidebar>
    </MainLayout>
  );
};
