import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const TitleBar = () => {
  return (
    <div>
      <Box bg="#6257E2" w="100%" h="70px" display="flex" alignItems="center" justifyContent="center">
        <Heading as='h1' size='md' color="white">Tes Tingkat dan Jenis Kecemasan</Heading>
      </Box>
    </div>
  );
};

export default TitleBar;
