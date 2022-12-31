import React from "react";
import { useColorMode, Card, CardBody, Text, Heading } from "@chakra-ui/react";
import { searchUserSelector } from "@entities/search-user";
import { useSelector } from "react-redux";
import { en } from "@shared/localization";
import { ICardText } from "@shared/localization";
import { IConnectUser } from "@entities/connect-user";
import { ISearchUser } from "@entities/search-user";

export const CardTurnover = (props: { user: IConnectUser }) => {
  const { user } = props;
  const { colorMode } = useColorMode();

  const [text, setText]: [text: ICardText, setText: Function] = React.useState(
    en.cardsText.turnover
  );

  React.useEffect(() => {
    setText(en.cardsText.turnover);
  }, []);

  const nativeCurrencyPrice = user.stats?.balanceUSD! / user.stats?.balance!;
  const turnover = user.stats?.walletTurnover! - user.stats?.balance!;
  const turnoverUSD = turnover! * nativeCurrencyPrice;
  const noData = user.stats ? user.stats.noData : true;
  const nativeCurrency = user.wallet
    ? user.wallet?.blockchain?.nativeCurrency.symbol ||
      user.wallet?.blockchain?.nativeCurrency
    : "";

  const status = {
    xs: 10,
    sm: 100,
    md: 1000,
    lg: 10000,
    xl: 100000,
    "2xl": 100000,
  };

  const headingId = noData
    ? 0
    : turnoverUSD <= status.xs
    ? 1
    : turnoverUSD <= status.sm
    ? 2
    : turnoverUSD <= status.md
    ? 3
    : turnoverUSD <= status.lg
    ? 4
    : turnoverUSD <= status.xl
    ? 5
    : 6;

  const textId = noData ? 0 : turnoverUSD <= status.sm ? 1 : 2;
  const value = noData
    ? 0
    : turnoverUSD <= status.sm
    ? Math.floor(turnover!) + 1
    : Math.floor(turnover!);

  return (
    <Card shadow={"none"} bg={colorMode === "dark" ? "gray.800" : "gray.100"}>
      <CardBody>
        <div
          style={{
            display: "block",
            width: "4rem",
            height: "4rem",
            background: "grey",
            borderRadius: "9999px",
          }}
        />
        <Heading
          pt={"4"}
          size={"md"}
          color={colorMode === "dark" ? "white" : "black"}
          fontWeight={"medium"}
        >
          {text.heading[headingId]}
        </Heading>
        <Text>
          {text.text[textId]!.replace("{value}", value.toString()).replace(
            "{coin}",
            `${nativeCurrency}`!
          )}
        </Text>
      </CardBody>
    </Card>
  );
};
