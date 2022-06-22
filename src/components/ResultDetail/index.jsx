import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ResultDetail = () => {
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
          Post Traumatic Disorder
        </Text>
        <Text>
          Pada tes Post Traumatic Disorder, Anda mendapatkan nilai 21 dari 28,
          sehingga Anda tergolong di kondisi Sangat Parah dan membutuhkan
          pertolongan profesional.
        </Text>
      </Box>
      <Box width="40%" display="flex" justifyContent="flex-end" alignItems="center">
        <Text fontWeight="bold">Sangat Parah</Text>
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
          <Text fontWeight="bold" fontSize="md" color="black" textAlign="center">
            100%
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ResultDetail;
