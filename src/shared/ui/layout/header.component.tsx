import {
  Container,
  Flex,
  Box,
  Spacer,
  useColorMode,
  Button,
  Text,
} from "@chakra-ui/react";
import { WalletButtons } from "@shared/ui";
import { useSearch } from "@features/search";

export const Header = () => {
  const { setColorMode, colorMode } = useColorMode();
  const { Modal, open } = useSearch();

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
        gap={"4"}
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
        <Button onClick={open} flex={"1"} justifyContent={"flex-start"}>
          <Text fontFamily={"icon"} fontSize={"1.5rem"} my={"-.25rem"} mr={"2"}>
            Search
          </Text>
          Get Score
        </Button>
        <Modal />
        <WalletButtons />
      </Flex>
    </Container>
  );
};
export default Header;
