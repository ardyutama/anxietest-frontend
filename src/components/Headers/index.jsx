import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import TitleBar from "../../components/TitleBar";

const Headers = () => {
  const [progress, setProgress] = useState(0);
  return (
    <Box display="flex" flexDirection="column" position="sticky" top="0">
      <TitleBar />
      <ProgressBar value={progress} />
    </Box>
  );
};

export default Headers;
