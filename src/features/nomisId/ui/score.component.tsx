import { Box, Tooltip } from "@chakra-ui/react";

import { IData } from "../../../shared/api/nomis/scoreResponse.interface";

interface IScoreProps {
  api: IData | undefined;
}

export const Score = (props: IScoreProps) => {
  const { api } = props;
  const score = Math.round(api?.score! * 350 + 400);
  const color = 120 * api?.score!;

  return (
    <Tooltip
      label={"350 is bad, 800 is good"}
      bg={"blackAlpha.600"}
      color={"white"}
      backdropFilter={"blur(1rem)"}
    >
      <Box
        bg={api?.score! ? `hsla(${color}, 100%, 50%, 100%)` : "blue.4 00"}
        color={"white"}
        maxW={"fit-content"}
        px={"2"}
        borderRadius={"full"}
        pos={"absolute"}
        right={"0"}
        top={"0"}
        cursor={"help"}
      >
        {score ? score : "Loading"}
      </Box>
    </Tooltip>
  );
};
