import { useEffect, useState } from "react";
import Form from "../Form";
import quiz from "../../question";
import ButtonLink from "../Button";
const QuizContainer = ({ questionData }) => {
  const [question, setQuestion] = useState([]);

  const fetchQuestion = () => {
    setQuestion([]);
    quiz.map((item) => {
      return item.questions.map((question, index) => {
        var data = {
          id: item.title + index,
          title: item.title,
          questions: question,
          value: "0",
        };
        return setQuestion((prev) => [...prev, data]);
      });
    });
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("question", JSON.stringify(question));
  // }, [question]);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setQuestion((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: value } : item
      )
    );
  };
  console.log(question);
  return (
    <>
      {question?.map((item, index) => (
        <Form
          key={index}
          question={item.questions}
          name={item.title}
          handleChange={handleChange}
          value={item.value}
          id={item.id}
        />
      ))}
      <ButtonLink
        text="Submit Hasil"
        path="/result"
        mt={12}
        mb={12}
        onClick={() =>
          localStorage.setItem("question", JSON.stringify(question))
        }
      />
    </>
  );
};

export default QuizContainer;
