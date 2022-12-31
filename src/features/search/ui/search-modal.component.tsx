import {
  Input,
  Button,
  Flex,
  Text,
  Avatar,
  useColorMode,
} from "@chakra-ui/react";
import {
  scoreBlockchainsList as list,
  scoreBlockchainsGroups as groups,
} from "@shared/lib";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSetReset, searchUserSelector } from "@entities/search-user";

export const SearchModal = () => {
  const user = useSelector(searchUserSelector);
  const dispatch = useDispatch();

  const { colorMode } = useColorMode();
  const [input, setInput] = React.useState<undefined | string>(
    user.wallet.address || undefined
  );
  const [select, setSelect] = React.useState(
    list.find(
      (blockchain) =>
        blockchain.slug === "ethereum" && blockchain.group === "finance"
    )
  );

  const router = useRouter();

  const handle = () => {
    if (input) {
      router.push(`/${select?.slug}/${input}`);
      dispatch(searchSetReset());
    }
  };

  return (
    <>
      <Flex gap={"4"}>
        <Input
          onChange={(e) => setInput(e.target.value)}
          defaultValue={
            user.wallet.address
              ? user.wallet.name || user.wallet.address
              : undefined
          }
          placeholder={`${
            select?.addressStartWith
              ? select?.addressStartWith + "... address"
              : "Wallet address..."
          }${select?.evm ? " or .eth name" : ""}`}
          bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.200"}
        />
        <Button
          px={"6"}
          onClick={handle}
          bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.200"}
          _hover={{
            bg: colorMode === "dark" ? "whiteAlpha.300" : "blackAlpha.300",
          }}
        >
          Get Score
        </Button>
      </Flex>
      <Flex flexDir={"column"} gap={"4"} my={"4"}>
        {groups.map((group) => {
          return (
            <div key={group.apiSlug}>
              <Text mb={"2"}>{group.label}</Text>
              <Flex flexWrap={"wrap"} gap={"2"}>
                {list.map((blockchain) => {
                  return (
                    blockchain.group === group.slug && (
                      <Button
                        pl={"1"}
                        borderRadius={"full"}
                        bg={
                          blockchain === select
                            ? "purple.400"
                            : colorMode === "dark"
                            ? "whiteAlpha.100"
                            : "blackAlpha.200"
                        }
                        color={
                          blockchain === select
                            ? "white"
                            : colorMode === "dark"
                            ? "white"
                            : "black"
                        }
                        _hover={{
                          bg:
                            blockchain === select
                              ? "purple.600"
                              : colorMode === "dark"
                              ? "whiteAlpha.300"
                              : "blackAlpha.300",
                        }}
                        onClick={() => setSelect(blockchain)}
                      >
                        <Avatar
                          mr={"2"}
                          size={"sm"}
                          src={`/blockchains/${blockchain.slug}.svg`}
                        />
                        {blockchain.name}
                      </Button>
                    )
                  );
                })}
              </Flex>
            </div>
          );
        })}
      </Flex>
    </>
  );
};
