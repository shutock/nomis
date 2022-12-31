import React from "react";
import { Container, Flex, Box, useColorMode } from "@chakra-ui/react";
import { Sidebar } from "./sidebar.component";

interface IWithSidebarProps {
  children: React.ReactNode;
}

export const WithSidebar = (props: IWithSidebarProps) => {
  const { children } = props;
  const { colorMode } = useColorMode();

  return (
    <Container maxW={"9xl"}>
      <Flex gap={"4"} pt={"calc(6.5rem + 2px)"} h={"200vh"}>
        {/* <Sidebar>SideBar</Sidebar> */}
        <Flex
          h={"fit-content"}
          bg={colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200"}
          p={"4"}
          flex={"1"}
          borderRadius={"3xl"}
          gap={"4"}
        >
          {children}
        </Flex>
      </Flex>
    </Container>
  );
};
