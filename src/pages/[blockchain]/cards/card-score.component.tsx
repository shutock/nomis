import {
  Card,
  CardBody,
  CircularProgress,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { searchUser } from "../../../entities";
import { format } from "../../../shared";
import { useColorMode } from "@chakra-ui/react";

export const CardScore = () => {
  const { colorMode } = useColorMode();
  const user = useSelector(searchUser);
  const percent = (user?.score! - format.min) / (format.max - format.min);
  const color = 120 * percent;
  const size = 4; // rems
  const thickness = 0.5; // rems

  return (
    <Card
      shadow={"none"}
      bg={colorMode === "dark" ? "gray.800" : "gray.100"}
      pos={"relative"}
      overflow={"hidden"}
      _after={{
        content: "''",
        display: "block",
        pos: "absolute",
        right: "0",
        zIndex: "1",
        width: "8rem",
        height: "8rem",
        filter: "blur(8rem)",
        bg: `hsl(${color}, 100%, ${colorMode === "dark" ? 50 : 40}%)`,
      }}
    >
      <CardBody zIndex={"2"}>
        <div
          style={{
            position: "relative",
            width: `${size}rem`,
            height: `${size}rem`,
          }}
        >
          <CircularProgress
            pos={"absolute"}
            top={0}
            left={0}
            thickness={`${thickness}rem`}
            trackColor={"transparent"}
            color={colorMode === "dark" ? "whiteAlpha.400" : "blackAlpha.200"}
            value={800}
            max={format.max * 2}
            min={0}
            capIsRound
            size={`${size}rem`}
            transform={"rotate(-90deg)"}
          />
          <CircularProgress
            pos={"absolute"}
            top={0}
            left={0}
            thickness={`${thickness}rem`}
            trackColor={"transparent"}
            color={`hsl(${color}, 100%, ${colorMode === "dark" ? 50 : 40}%)`}
            value={user.score}
            max={format.max * 2}
            min={0}
            capIsRound
            size={`${size}rem`}
            transform={"rotate(-90deg)"}
          />
          <Text
            textAlign={"center"}
            width={"100%"}
            pos={"absolute"}
            bottom={"0"}
          >
            {user.score}
          </Text>
        </div>
        <Heading
          pt={"4"}
          size={"md"}
          color={colorMode === "dark" ? "white" : "black"}
          fontWeight={"medium"}
        >
          Nomis Score
        </Heading>
        <Text>The overall Nomis score is {user.score}.</Text>
      </CardBody>
    </Card>
  );
};
