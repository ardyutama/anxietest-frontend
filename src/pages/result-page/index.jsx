import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ResultDetail from "../../components/ResultDetail";
import Result from "../../components/Result";
import ButtonLink from "../../components/Button";
const ResultPage = () => {
  const [res, setRes] = useState();
  const [score, setScore] = useState();
  const maxValue = {
    GAD: 28,
    PAD: 40,
    OCD: 72,
    PTSD: 88,
    SAD: 68,
  };
  const result = {
    GAD: 0,
    PAD: 0,
    OCD: 0,
    PTSD: 0,
    SAD: 0,
  };
  const resPercent = {};
  useEffect(() => {
    calc();
    setScore(result);
    calcPresentase();
    setRes(resPercent);
  }, []);

  const calc = async () => {
    const items = JSON.parse(localStorage.getItem("question"));
    if (items) {
      for (const key in result) {
        result[key] = items
          .filter((item) => item.title === key)
          .map((item) => parseInt(item.value))
          .reduce((prev, curr) => prev + curr, 0);
      }
    }
  };
  const calcPresentase = () => {
    for (const key in result) {
      resPercent[key] = Math.round((result[key] / maxValue[key]) * 100);
    }
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
          {res && <Result data={res} score={score} />}
        </Box>
        <ButtonLink
          mt={10}
          to="/test"
          text="Ambil Test Lagi"
          onClick={() => localStorage.clear("question")}
        />
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
        {res && (
          <>
            <ResultDetail
              title={"General Anxiety Disorder"}
              data={res.GAD}
              score={score.GAD}
            />
            <ResultDetail
              title={"Obsessive Compulsive Disorder"}
              data={res.OCD}
              score={score.OCD}
            />
            <ResultDetail
              title={"Panic Disorder"}
              data={res.PAD}
              score={score.PAD}
            />
            <ResultDetail
              title={"Post Traumatic Stress Disorder"}
              data={res.PTSD}
              score={score.PTSD}
            />
            <ResultDetail
              title={"Social Anxiety Disorder"}
              data={res.SAD}
              score={score.SAD}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default ResultPage;
