import { Box, Progress, Text } from "@chakra-ui/react";
import React from "react";

const ProgressBar = ({value}) => {
  return (
    <div>
      <Box
        bg="#F9F9F9"
        w="100%"
        h="70px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="md" me={2}>{value}%</Text>
        <Box w="600px">
          <Progress colorScheme="gray" value={value} />
        </Box>
      </Box>
    </div>
  );
};

export default ProgressBar;
