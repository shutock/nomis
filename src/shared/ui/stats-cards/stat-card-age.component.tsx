import React from "react";
import { Card, CardBody, Text, Heading } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { ICardText } from "@shared/localization";
import { en } from "@shared/localization";
import { IConnectUser } from "@entities/connect-user";
import { ISearchUser } from "@entities/search-user";
import { scoreBlockchainsList } from "@shared/lib";
import Image from "next/image";
import { ageEmojis } from "./stat-card-age-emojis";

export const CardAge = (props: { user: IConnectUser | ISearchUser }) => {
  const { user } = props;
  const { colorMode } = useColorMode();

  const [text, setText]: [text: ICardText, setText: Function] = React.useState(
    en.cardsText.age
  );

  React.useEffect(() => {
    setText(en.cardsText.age);
  }, []);

  const blockchain = scoreBlockchainsList.find(
    (b) => b.name === user.wallet?.blockchain?.name
  );

  const msInMonth = (1000 * 60 * 60 * 24 * 365) / 12;

  const noData = user.stats?.noData;

  const walletAge = user.stats?.walletAge!;
  const genesisDate = blockchain?.genesisDate.getTime()! / msInMonth;

  const todayDate = new Date().getTime() / msInMonth;
  const blockchainAge = todayDate - genesisDate;

  const qMonths = blockchainAge / 4;

  const headingId = noData
    ? 0
    : walletAge <= 1 * qMonths
    ? 1
    : walletAge <= 2 * qMonths
    ? 2
    : walletAge <= 3 * qMonths
    ? 3
    : 4;

  const textId = noData ? 0 : walletAge <= 1 * qMonths ? 1 : 2;

  return (
    <Card shadow={"none"} bg={colorMode === "dark" ? "gray.800" : "gray.100"}>
      <CardBody>
        <Image
          src={ageEmojis[headingId]}
          alt={"emoji"}
          width={"64"}
          height={"64"}
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
          {text.text[textId].replace("{month}", `${user.stats?.walletAge}`)}
        </Text>
      </CardBody>
    </Card>
  );
};
