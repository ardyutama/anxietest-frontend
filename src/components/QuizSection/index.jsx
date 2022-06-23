import { Box } from "@chakra-ui/react";
import { Link, animateScroll as scroll } from "react-scroll";
import Form from "../Form";

const QuizSection = ({ id, currentItems, handleChange }) => {
  return (
    <Box id={id} w="-moz-max-content">
      {currentItems.map((item, index) => (
        <Form
          key={index}
          id={item.id}
          question={item.questions}
          handleChange={handleChange}
          name={item.title}
          value={item.value}
          checked={item.isChecked}
        />
      ))}
    </Box>
  );
};

export default QuizSection;
