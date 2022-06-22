import { useEffect, useState } from "react";
import Form from "../Form";
import quiz from "../../question";
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

  useEffect(() => {
    localStorage.setItem("question", JSON.stringify(question));
  }, [question]);

  // const setValue = (id, value) => {
  //   question.map((item) => {
  //     if (item.id === id) {
  //       item.value = value;
  //     }
  //     return item;
  //   });
  // };
  console.log(question);
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    // setValue(id, value);
    setQuestion((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: value } : item
      )
    );
  };

  return (
    <>
      {question.map((item, index) => (
        <Form
          key={index}
          question={item.questions}
          name={item.title}
          handleChange={handleChange}
          value={item.value}
          id={item.id}
        />
      ))}
    </>
  );
};

export default QuizContainer;
