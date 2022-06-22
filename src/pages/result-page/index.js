import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ResultBar from "../../components/ResultBar";
import ResultDetail from "../../components/ResultDetail";
import quiz from "../../question";
import Result from "../../components/Result";
const ResultPage = () => {
  const result = {
    GAD: 0,
    PAD: 0,
    OCD: 0,
    PTSD: 0,
    SAD: 0,
  };
  useEffect(() => {
    calc();
  }, [result]);

  const calc = async () => {
    const items = JSON.parse(localStorage.getItem("question"));
    if (items) {
      for (const key in result) {
        result[key] = items
          .filter((item) => item.title === key)
          .map((item) => parseInt(item.value))
          .reduce((prev, curr) => prev + curr, 0);
        // .reduce((prev, curr) => prev + curr, 0)
      }
      console.log(result);
      // return resultSum;
      // calcPresentase();
    }
  };
  const calcPresentase = () => {
    quiz.map((item) =>
      Math.round((result[item.title] / item.questions.length) * 100)
    );
  };
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mt="50px">
        <Heading as="h1" size="lg" color="black" textAlign="center">
          Hasil Tes Anda
        </Heading>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          height="500px"
          justifyContent="space-around"
          width="50%"
          paddingX="170px"
          paddingY="20px"
          border="1px solid #ccc"
          mt="20px"
        >
          <Result data={result} />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mt="50px"
      >
        <Box
          as="button"
          width="36px"
          height="36px"
          mr="10px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="8px"
          borderRadius="32px"
          fontSize="14px"
          fontWeight="bold"
          bg="#6257E2"
          color="white"
          _hover={{ bg: "#ACA5FD" }}
          _active={{
            bg: "#dddfe2",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
          }}
        ></Box>
        <Text>Lihat Penjelasan Hasil</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt="50px">
        <ResultDetail />
        <ResultDetail />
        <ResultDetail />
        <ResultDetail />
      </Box>
    </>
  );
};

export default ResultPage;
