import { Heading, Grid, GridItem, Box, useColorMode } from "@chakra-ui/react";
import { IConnectUser } from "@entities/connect-user";
import { ISearchUser } from "@entities/search-user";
import { CardAge, CardPulse, CardScore, CardTurnover } from "@shared/ui";

export const StatsCards = (props: { user: IConnectUser | ISearchUser }) => {
  const { user } = props;
  const { colorMode } = useColorMode();

  return (
    <Box flex={"1"}>
      <Heading color={colorMode === "dark" ? "white" : "black"}>
        Highlights
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={"4"}>
        <GridItem>
          <CardScore user={user} />
        </GridItem>
        <GridItem>
          <CardPulse user={user} />
        </GridItem>
        <GridItem>
          <CardTurnover user={user} />
        </GridItem>
        <GridItem>
          <CardAge user={user} />
        </GridItem>
      </Grid>
    </Box>
  );
};
