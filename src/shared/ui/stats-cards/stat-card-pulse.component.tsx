import { Card, CardBody } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { IConnectUser } from "@entities/connect-user";
import { ISearchUser } from "@entities/search-user";

export const CardPulse = (props: { user: IConnectUser | ISearchUser }) => {
  const { user } = props;
  const { colorMode } = useColorMode();
  return (
    <Card shadow={"none"} bg={colorMode === "dark" ? "gray.800" : "gray.100"}>
      <CardBody>Pulse</CardBody>
    </Card>
  );
};
