import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ResultDetail = ({ title, data, score }) => {
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
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      width="70%"
      border="1px solid #ccc"
      borderRadius="10px"
      p="30px"
      mb="20px"
      bg="#FBFBFB"
    >
      <Box width="60%" flexDirection="column" display="flex">
        <Text mb="15px" fontSize="md" fontWeight="semibold" color="black">
          {title}
        </Text>
        <Text>
          Pada tes Post Traumatic Disorder, Anda mendapatkan nilai 21 dari 28,
          sehingga Anda tergolong di kondisi Sangat Parah dan membutuhkan
          pertolongan profesional.
        </Text>
      </Box>
      <Box
        width="40%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Text fontWeight="bold">{measure(score)}</Text>
        <Box
          border="1px solid #ccc"
          borderRadius="100px"
          mx="10px"
          p="10px"
          width="65px"
          height="65px"
          display="flex"
          alignItems="center"
          bg="#E0E0E0"
        >
          <Text
            fontWeight="bold"
            fontSize="md"
            color="black"
            textAlign="center"
          >
            {data}%
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ResultDetail;
