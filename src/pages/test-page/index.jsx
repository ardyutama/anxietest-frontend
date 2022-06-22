import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import TitleBar from "../../components/TitleBar";
import QuizContainer from "../../components/QuizContainer";

const TestPage = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <TitleBar />
      <ProgressBar value={progress} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={2}
      >
        <QuizContainer />
      </Box>
    </div>
  );
};

export default TestPage;
