import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import TitleBar from "../../components/TitleBar";
import { Pagination } from "../../components/Pagination";

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
        <Pagination itemsPerPage={7} />
      </Box>
    </div>
  );
};

export default TestPage;
