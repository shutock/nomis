import { useAccount, useEnsAvatar, useNetwork, useDisconnect } from "wagmi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Flex,
  Button,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { useWalletScoreQuery } from "../../../shared";
import React from "react";
import { useDisplayName } from "../../../blockchain";
import { ProfileCard } from "./profile-card.component";

interface IProfileProps {
  setIsDisconnecting: Function;
}

export const Profile = (props: IProfileProps) => {
  const { setIsDisconnecting } = props;

  const { disconnect } = useDisconnect();

  const { address } = useAccount();
  const { data: avatar } = useEnsAvatar({ address });
  const displayName = useDisplayName({ address });

  const {
    isError,
    isLoading,
    data: api,
  } = useWalletScoreQuery({
    address: `${address}`,
    blockchain: "ethereum",
  });

  const handleClick = () => {
    setIsDisconnecting(true);
    disconnect();
  };

  const statusColor = isLoading
    ? "blue.400"
    : isError
    ? "red.400"
    : "green.400";

  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          bg={"gray.800"}
          _hover={{ bg: "gray.700" }}
          _active={{ transform: "scale(.975)", bg: "gray.600" }}
          borderRadius={"sm"}
        >
          <Flex alignItems={"center"} gap={"2"} minW={"fit-content"}>
            {avatar ? (
              <Avatar src={avatar} size="sm" ml={"-3"}>
                <AvatarBadge bg={statusColor} boxSize=".75rem" />
              </Avatar>
            ) : null}
            {displayName}
          </Flex>
        </MenuButton>
        <MenuList bg={"gray.800"} maxW={"fit-content"} overflow={"hidden"}>
          <ProfileCard address={address} api={api} />
          <MenuDivider />

          <MenuItem
            bg={"gray.800"}
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
          >
            Menu Iten
          </MenuItem>

          <MenuDivider />
          <MenuItem
            color={"red.300"}
            bg={"gray.800"}
            _hover={{ bg: "red.800" }}
            _active={{ bg: "gray.600" }}
          >
            <div onClick={handleClick}>Disconnect</div>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Profile;
