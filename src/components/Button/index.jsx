import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ButtonLink = ({path, text,...props}) => {
  return (
    <div>
      <Button
        as={Link}
        bg="main.primary"
        px={12}
        py={3}
        display="inline-flex"
        color="white"
        to={path}
        _hover={{
          bg: "main.surface",
          color: "main.primary",
        }}
        {...props}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonLink;
