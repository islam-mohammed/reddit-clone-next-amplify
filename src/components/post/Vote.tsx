import { Flex, Text } from "@aws-amplify/ui-react";
import React from "react";
import DownArrowIcon from "../icons/DownArrowIcon";
import UpArrowIcon from "../icons/UpArrowIcon";

type Props = {
  voteUp: number;
  voteDown: number;
};

export default function Vote({ voteUp, voteDown }: Props) {
  return (
    <Flex
      direction={{ large: "column" }}
      justifyContent="center"
      alignItems="center"
      marginTop={{ base: "5px", large: "16px" }}
      marginBottom={{ base: "5px", large: "0" }}
      gap={1}
    >
      <UpArrowIcon width="15px" className="cursor-pointer" />
      <Text width="fit-content" minWidth={36} textAlign="center">
        {new Intl.NumberFormat("en", { notation: "compact" }).format(
          voteUp - voteDown,
        ) || 0}
      </Text>
      <DownArrowIcon width="15px" className="cursor-pointer" />
    </Flex>
  );
}
