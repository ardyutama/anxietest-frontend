import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Headers from "../../components/Headers";

import QuizContainer from "../../components/QuizContainer";

const TestPage = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Headers />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={2}
      >
        <QuizContainer />
      </Box>
    </Box>
  );
};

export default TestPage;
