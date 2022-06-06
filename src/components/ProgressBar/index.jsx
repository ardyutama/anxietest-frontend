import { Box, Progress, Text } from "@chakra-ui/react";
import React from "react";

const ProgressBar = () => {
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
        <Text fontSize="md" me={2}>80%</Text>
        <Box w="600px">
          <Progress colorScheme="gray" value={80} />
        </Box>
      </Box>
    </div>
  );
};

export default ProgressBar;
