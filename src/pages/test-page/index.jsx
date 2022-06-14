import { Box } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import ProgressBar from "../../components/ProgressBar";
import TitleBar from "../../components/TitleBar";
import quiz from "./question";
import { Pagination } from "../../components/Pagination";
import { useEffect } from "react";



const TestPage = () => {
  const [progress, setProgress] = useState(0);
  const [question, setQuestion] = useState([])
  const fetchQuestion = () => {
    setQuestion([])
    quiz.map((item) => {
      item.questions.map((question) => {
        var data = {title: item.title, questions: question}
        setQuestion(prev => [...prev, data])
      });
    });
  };
  useEffect(() => {
    fetchQuestion();
  }, []);

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
        {question.length > 0 ? <Pagination itemsPerPage={7} items={question} /> : null}
      </Box>
    </div>
  );
};

export default TestPage;
