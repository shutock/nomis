import Image from "next/image";
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
} from "@chakra-ui/react";
import { useConnect } from "wagmi";
import { useUnstoppableDomainsConnect } from "@features/unstoppable-domains";
import { useEvmConnect } from "@features/evm";

export const ConnectButton = () => {
  const display = useBreakpointValue({
    base: false,
    md: true,
  });

  const { connect: udConnect } = useUnstoppableDomainsConnect();
  const { connect: evmConnect } = useEvmConnect();

  const { connectors } = useConnect();

  return (
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
            <Avatar
              src={`/connectors/MetaMask.svg`}
              size={"sm"}
              display={display ? "static" : "none"}
            />
            <Avatar
              src={`/connectors/WalletConnect.svg`}
              size={"sm"}
              display={display ? "static" : "none"}
            />
            <Avatar
              src={`/connectors/CoinbaseWallet.svg`}
              size={"sm"}
              display={display ? "static" : "none"}
            />
            <Avatar
              src={`/connectors/UnstoppableDomains.svg`}
              size={"sm"}
              display={display ? "static" : "none"}
            />
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
            onClick={() => {
              evmConnect({ connector });
            }}
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
          >
            {connector.name}
          </MenuItem>
        ))}
        <MenuItem
          bg={"gray.800"}
          _hover={{ bg: "gray.700" }}
          _active={{ bg: "gray.600" }}
          onClick={() => udConnect()}
          icon={
            <Image
              src={`/connectors/UnstoppableDomains.svg`}
              width={24}
              height={24}
              alt={`UnstoppableDomains's logo`}
              style={{
                borderRadius: ".5rem",
              }}
            />
          }
        >
          Unstoppable Domains
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ConnectButton;
