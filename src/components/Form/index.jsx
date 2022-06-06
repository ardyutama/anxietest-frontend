import { Box, Heading, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Form = () => {
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
          Saya mengingat apapun yang membawa kembali perasaan tentang peristiwa
          tersebut.
        </Heading>
        <RadioGroup>
          <Stack direction="row" spacing='24px'>
            <Text>Tidak pernah</Text>
            <Radio colorScheme="blackAlpha" size='lg' value="1"/>
            <Radio colorScheme="blackAlpha" size='lg' value="2"/>
            <Radio colorScheme="blackAlpha" size='lg' value="3"/>
            <Radio colorScheme="blackAlpha" size='lg' value="4"/>
            <Radio colorScheme="blackAlpha" size='lg' value="5"/>
            <Text>Sangat Sering</Text>
          </Stack>
        </RadioGroup>
      </Box>
    </div>
  );
};

export default Form;
