import { Card, CardBody } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export const CardAge = () => {
  const { colorMode } = useColorMode();
  return (
    <Card shadow={"none"} bg={colorMode === "dark" ? "gray.800" : "gray.100"}>
      <CardBody>Age</CardBody>
    </Card>
  );
};
