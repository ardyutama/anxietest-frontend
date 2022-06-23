import { Box, Progress, Text } from "@chakra-ui/react";
import React from "react";

const ResultBar = ({ data, children, score, title }) => {
  const measure = () => {
    if (title === "General Anxiety Disorder") {
      if (score <= 7) return "Ringan";
      else if (score <= 14 && score > 7) return "Sedang";
      else if (score <= 21 && score > 14) return "Sedang Berat";
      else if (score <= 28 && score > 21) return "Berat";
    } else if (title === "Panic Disorder") {
      if (score <= 4) return "tidak ada gangguan";
      else if (score <= 14 && score > 5) return "Ringan";
      else if (score <= 24 && score > 15) return "Sedang";
      else if (score <= 34 && score > 25) return "Berat";
      else if (score <= 40 && score > 35) return "Ekstrim";
    } else if (title === "Obsessive Compulsive Disorder") {
      if (score <= 21) return "Ringan";
      else if (score <= 40 && score > 22) return "Sedang";
      else if (score <= 72 && score > 41) return "Berat";
    } else if (title === "Post Traumatic Stress Disorder") {
      if (score <= 10) return "tidak ada gangguan";
      else if (score <= 30 && score > 11) return "Ringan";
      else if (score <= 50 && score > 31) return "Sedang";
      else if (score <= 88 && score > 51) return "Berat";
    } else if (title === "Social Anxiety Disorder") {
      if (score <= 20) return "tidak ada gangguan";
      else if (score <= 30 && score > 21) return "Ringan";
      else if (score <= 40 && score > 31) return "Sedang";
      else if (score <= 50 && score > 41) return "Berat";
      else if (score <= 68 && score > 51) return "Ekstrim";
    }
  };
  console.log(data);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text fontSize="md" fontWeight="bold" color="black">
        {children}
      </Text>
      <Box width="100%" display="flex" alignItems="center">
        <Text mr="10px">{data}%</Text>
        <Progress value={data} width="100%" my="8px" />
      </Box>
      <Text>{measure(score)}</Text>
    </Box>
  );
};

export default ResultBar;
