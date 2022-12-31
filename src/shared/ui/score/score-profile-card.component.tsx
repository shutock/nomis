import {
  Avatar,
  Flex,
  Heading,
  Text,
  useClipboard,
  useColorMode,
} from "@chakra-ui/react";
import { IConnectUser } from "@entities/connect-user";
import { ISearchUser } from "@entities/search-user";
import { useShortAddress } from "@shared/utils";
import React from "react";

interface IProfileCard {
  user: IConnectUser | ISearchUser;
}

export const ProfileCard = (props: IProfileCard) => {
  const { user } = props;
  const { colorMode } = useColorMode();

  const {
    value: valueA,
    setValue: setValueA,
    onCopy: onCopyA,
    hasCopied: hasCopiedA,
  } = useClipboard("");
  const {
    value: valueB,
    setValue: setValueB,
    onCopy: onCopyB,
    hasCopied: hasCopiedB,
  } = useClipboard("");

  const shortAddress = useShortAddress(user.wallet?.address);

  React.useEffect(() => {
    setValueA(user.wallet?.name!);
    setValueB(user.wallet?.address!);
  }, [setValueA, setValueB, user.wallet?.address, user.wallet?.name]);

  const age = {
    years: Math.floor(user.stats?.walletAge! / 12),
    months:
      user.stats?.walletAge! - Math.floor(user.stats?.walletAge! / 12) * 12,
  };

  return (
    <Flex
      minW={"xs"}
      flexDir={"column"}
      alignItems={"center"}
      gap={"4"}
      px={"4"}
      py={"8"}
      borderRadius={"1rem"}
      background={colorMode === "dark" ? "gray.800" : "gray.100"}
      h={"fit-content"}
    >
      <Avatar src={user.wallet?.avatar} size={"2xl"} />
      <Flex flexDir={"column"} alignItems={"center"}>
        <Heading
          cursor={"pointer"}
          onClick={() => onCopyA()}
          fontSize={"xl"}
          textAlign={"center"}
        >
          {hasCopiedA ? "Copied" : user.wallet?.name}
        </Heading>
        <Text cursor={"pointer"} onClick={() => onCopyB()}>
          {hasCopiedB ? "Copied" : shortAddress}
        </Text>
      </Flex>
      <Flex gap={"4"} mt={"4"}>
        <Flex flexDir={"column"}>
          <Text>{`${Math.round(user.stats?.balance! * 1000) / 1000} ${
            // @ts-ignore: Unreachable code error
            user.wallet?.blockchain?.nativeCurrency.symbol! ||
            user.wallet?.blockchain?.nativeCurrency
          }`}</Text>
          <Text fontSize={"sm"}>Balance</Text>
        </Flex>

        <Flex
          px={"4"}
          borderLeft={"1px"}
          borderRight={"1px"}
          flexDir={"column"}
          borderColor={
            colorMode === "dark" ? "whiteAlpha.300" : "blackAlpha.300"
          }
        >
          <Text>{`${Math.round(user.stats?.walletTurnover! * 1000) / 1000} ${
            // @ts-ignore: Unreachable code error
            user.wallet?.blockchain?.nativeCurrency.symbol! ||
            user.wallet?.blockchain?.nativeCurrency
          }`}</Text>
          <Text fontSize={"sm"}>Turnover</Text>
        </Flex>

        <Flex flexDir={"column"}>
          <Text>{`${age.years > 0 ? age.years + "y " : ""}${
            age.months
          } mo`}</Text>
          <Text fontSize={"sm"}>Age</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
