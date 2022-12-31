import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Flex,
  Button,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { useDisplayName } from "@shared/utils";
import { useSelector } from "react-redux";
import { connectUserSelector } from "@entities/connect-user";
import { useDisconnect } from "./use-disconnect.hook";

export const ProfileButton = () => {
  const user = useSelector(connectUserSelector);
  const displayName = useDisplayName({ address: user.wallet?.address });
  const { disconnect } = useDisconnect();

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
            {user.wallet?.avatar ? (
              <Avatar src={user.wallet?.avatar} size="sm" ml={"-3"}></Avatar>
            ) : null}
            {user.wallet?.name || displayName}
          </Flex>
        </MenuButton>
        <MenuList bg={"gray.800"} maxW={"fit-content"} overflow={"hidden"}>
          <MenuDivider />

          <MenuItem
            bg={"gray.800"}
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
          >
            Menu Item
          </MenuItem>

          <MenuDivider />
          <MenuItem
            color={"red.300"}
            bg={"gray.800"}
            _hover={{ bg: "red.800" }}
            _active={{ bg: "gray.600" }}
          >
            <div onClick={() => disconnect()}>Disconnect</div>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ProfileButton;
