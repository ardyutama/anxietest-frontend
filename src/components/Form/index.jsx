import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";

const Form = ({ question, name, handleChange, value, id }) => {
  return (
    <div>
      <Box
        w="100%"
        h="70px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={8}
      >
        <Heading as="h3" size="md" mb={4}>
          {question}
        </Heading>
        <Flex flexDir="row" gap={4} alignItems="center">
          <Text>Tidak pernah</Text>
          <RadioGroup
            name={name}
            size="lg"
            colorScheme="blackAlpha"
            defaultValue={value}
          >
            <Stack direction="row" spacing="24px">
              <Radio id={id} onChange={handleChange} value="1" name={id} />
              <Radio id={id} onChange={handleChange} value="2" name={id} />
              <Radio id={id} onChange={handleChange} value="3" name={id} />
              <Radio id={id} onChange={handleChange} value="4" name={id} />
              <Radio id={id} onChange={handleChange} value="5" name={id} />
            </Stack>
          </RadioGroup>
          <Text>Sangat Sering</Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Form;
