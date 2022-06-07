import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import Form from "../../components/Form";
import ProgressBar from "../../components/ProgressBar";
import TitleBar from "../../components/TitleBar";

const TestPage = () => {
  return (
    <div>
      <TitleBar />
      <ProgressBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={2}
      >
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <HStack spacing="24px">
          <Button colorScheme="teal" size="md" width="200px" my={8}>
            Sebelumnya
          </Button>
          <Button colorScheme="teal" size="md" width="200px" my={8}>
            Berikutnya
          </Button>
        </HStack>
      </Box>
    </div>
  );
};

export default TestPage;
