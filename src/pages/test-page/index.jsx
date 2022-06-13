import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import TitleBar from "../../components/TitleBar";
import quiz from "./question";
import { Pagination } from "../../components/Pagination";
import { useEffect } from "react";

const TestPage = () => {
  const [progress, setProgress] = useState(0);
  const [question, setQuestion] = useState();

  const fetchQuestion = () => {
    let i = 0;
    while (i < quiz.length) {
      const id = quiz[i].title
      var questions = quiz[i].questions.map((item, index) => {
        return {
          title: id,
          questions: item,
        }
      })
      setQuestion(questions);
      i++;
    }
  };
  useEffect(() => {
    fetchQuestion();
  }, []);
  console.log(question);
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
        {/* <Pagination itemsPerPage={7} items={quiz[0].questions} /> */}
        <Pagination itemsPerPage={7} items={question} />
      </Box>
    </div>
  );
};

export default TestPage;
