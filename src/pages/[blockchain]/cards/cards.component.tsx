import { Heading, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { CardAge } from "./card-age.component";
import { CardPulse } from "./card-pulse.component";
import { CardScore } from "./card-score.component";
import { CardTurnover } from "./card-turnover.component";

export const Cards = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading color={colorMode === "dark" ? "white" : "black"}>
        Highlights
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={"4"}>
        <GridItem>
          <CardScore />
        </GridItem>
        <GridItem>
          <CardPulse />
        </GridItem>
        <GridItem>
          <CardTurnover />
        </GridItem>
        <GridItem>
          <CardAge />
        </GridItem>
      </Grid>
    </>
  );
};
