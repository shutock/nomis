import { useDisplayName, useShortAddress } from "../../../blockchain";
import { useEnsAvatar } from "wagmi";
import { Flex, Avatar, Text, useClipboard, Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { Score } from "./score.component";
import { IData } from "../../../shared/api/nomis/scoreResponse.interface";

interface IProfileCardProps {
  address: `0x${string}` | undefined;
  api: IData | undefined;
}

export const ProfileCard = (props: IProfileCardProps) => {
  const { address, api } = props;

  const { data: avatar } = useEnsAvatar({ address });
  const displayName = useDisplayName({ address });
  const shortAddress = useShortAddress(address);

  const { colorMode } = useColorMode();
  const { onCopy, value, hasCopied } = useClipboard(`${address}`);

  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <Flex flexDir={"column"} alignItems={"center"} p={"4"}>
      <Box pos={"relative"}>
        {avatar ? (
          <Avatar src={avatar} size={"2xl"} />
        ) : (
          <Avatar size={"2xl"} />
        )}
        <Score api={api} />
      </Box>

      <Text
        fontSize={"lg"}
        color={colorMode === "dark" ? "white" : "black"}
        fontWeight={"medium"}
        pt={"2"}
      >
        {displayName}
      </Text>

      <Box pos={"relative"}>
        <Text
          _hover={{
            bg: copied
              ? "blue.400"
              : colorMode === "dark"
              ? "whiteAlpha.300"
              : "blackAlpha.300",
          }}
          _active={{
            bg: "blue.400",
            color: "white",
            transform: "scale(.95)",
          }}
          css={
            "transition: background .2s ease-in-out, transform .2s ease-in-out"
          }
          bg={copied ? "blue.400" : "transparent"}
          px={"2"}
          borderRadius={"0.5rem"}
          onClick={handleCopy}
          cursor={"pointer"}
        >
          {copied ? "Copied" : shortAddress}
        </Text>
      </Box>
    </Flex>
  );
};
