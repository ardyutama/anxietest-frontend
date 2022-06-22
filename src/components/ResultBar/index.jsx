import { Box, Progress, Text } from "@chakra-ui/react";
import React from "react";

const ResultBar = ( { score, value, children } ) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text fontSize="md" fontWeight="bold" color="black">
        {children}
      </Text>
      <Box width="100%" display="flex" alignItems="center">
        <Text mr="10px">{score}%</Text>
        <Progress value={score} width="100%" my="8px" />
      </Box>
      <Text>{value}</Text>
    </Box>
  );
};

export default ResultBar;
