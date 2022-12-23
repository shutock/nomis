import { Container, Flex, Box, Spacer, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";

export const Header = () => {
  const { setColorMode, colorMode } = useColorMode();

  const Wallet = dynamic(
    () => import("../features/nomisId/ui/wallet.component"),
    { ssr: false }
  );

  return (
    <Container
      zIndex={"sticky"}
      as={"header"}
      position={"fixed"}
      left={0}
      right={0}
      p={4}
      maxW={"floated"}
      bgGradient={
        colorMode === "dark"
          ? "linear(to-t, transparent, black)"
          : "linear(to-t, transparent, white)"
      }
    >
      <Flex
        mx={"auto"}
        p={4}
        maxW={"3xl"}
        background={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
        borderRadius={"xl"}
        borderColor={
          colorMode === "dark"
            ? "whiteAlpha.200 !important"
            : "blackAlpha.200 !important"
        }
        border={"1px"}
        alignItems={"center"}
        backdropFilter={"blur(1rem)"}
      >
        <Box
          fontFamily={"heading"}
          fontSize={"2.5rem"}
          lineHeight={"line"}
          fontWeight={"medium"}
          letterSpacing={"-.075em"}
          py={0}
          onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
        >
          NOMIS
        </Box>
        <Spacer />
        <Wallet />
      </Flex>
    </Container>
  );
};
export default Header;
