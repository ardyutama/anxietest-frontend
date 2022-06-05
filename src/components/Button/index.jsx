import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ButtonLink = ({path}) => {
  return (
    <div>
      <Button
        as={Link}
        bg="main.primary"
        px={12}
        py={3}
        display="inline-flex"
        color="white"
        mt={10}
        to={path}
        _hover={{
          bg: "main.surface",
          color: "main.primary",
        }}
      >
        Ambil tes
      </Button>
    </div>
  );
};

export default ButtonLink;
