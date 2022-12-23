import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  AvatarGroup,
  Flex,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { Connector, useAccount, useConnect } from "wagmi";

interface IConnectProps {
  setIsConnecting: Function;
}

export const Connect = (props: IConnectProps) => {
  const { setIsConnecting } = props;
  const { connect, connectors, error, isLoading, isSuccess, pendingConnector } =
    useConnect();

  const display = useBreakpointValue({
    base: false,
    md: true,
  });

  const handleClick = (connector: Connector) => {
    setIsConnecting(true);
    connect({ connector });
  };

  return (
    <>
      <Menu>
        <MenuButton
          bg={"gray.800"}
          _hover={{ bg: "gray.700" }}
          _active={{ transform: "scale(.975)", bg: "gray.600" }}
          borderRadius={"sm"}
          as={Button}
          pl={display ? 1 : ""}
        >
          <Flex gap={2} alignItems={"center"}>
            <AvatarGroup borderColor={"transparent"}>
              {connectors.map((connector, id) => (
                <Avatar
                  key={id}
                  src={`/connectors/${connector.name.replace(" ", "")}.svg`}
                  size={"sm"}
                  display={display ? "static" : "none"}
                />
              ))}
            </AvatarGroup>
            Connect Wallet
          </Flex>
        </MenuButton>
        <MenuList bg={"gray.800"} maxW={"fit-content"} overflow={"hidden"}>
          {connectors.map((connector) => (
            <MenuItem
              bg={"gray.800"}
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.600" }}
              disabled={!connector.ready}
              key={connector.name}
              onClick={() => handleClick(connector)}
              icon={
                <Image
                  src={`/connectors/${connector.name.replace(" ", "")}.svg`}
                  width={24}
                  height={24}
                  alt={`${connector.name}'s logo`}
                  style={{
                    borderRadius: ".5rem",
                  }}
                />
              }
              command={connector.name.slice(0, 1)}
            >
              {connector.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default Connect;
