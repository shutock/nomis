import { Box, useColorMode } from "@chakra-ui/react";

interface IWithSidebarProps {
  children: React.ReactNode;
}

export const Sidebar = (props: IWithSidebarProps) => {
  const { children } = props;
  const { colorMode } = useColorMode();

  return (
    <Box
      h={"fit-content"}
      pos={"sticky"}
      top={"calc(6.5rem + 2px)"}
      bg={colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200"}
      p={"4"}
      minW={"2xs"}
      borderRadius={"3xl"}
    >
      {children}
    </Box>
  );
};
