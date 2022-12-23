import { Box, Tooltip } from "@chakra-ui/react";
import { useFormatScore } from "../../../shared";

import { IData } from "../../../shared/api/nomis/scoreResponse.interface";

interface IScoreProps {
  api: IData | undefined;
}

export const Score = (props: IScoreProps) => {
  const { api } = props;
  const formatedScore = useFormatScore(api?.score);
  const color = 120 * api?.score!;

  return (
    <Tooltip
      label={"350 is bad, 800 is good"}
      bg={"blackAlpha.600"}
      color={"white"}
      backdropFilter={"blur(1rem)"}
    >
      <Box
        bg={api?.score! ? `hsla(${color}, 100%, 50%, 100%)` : "blue.400"}
        color={"white"}
        maxW={"fit-content"}
        px={"2"}
        borderRadius={"full"}
        pos={"absolute"}
        right={"0"}
        top={"0"}
        cursor={"help"}
      >
        {formatedScore ? formatedScore : "Loading"}
      </Box>
    </Tooltip>
  );
};
