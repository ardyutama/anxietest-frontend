// import the necessary librarys and components
import { Box, Flex, Heading } from "@chakra-ui/react";
import Accordion from "../Accordion";

// create a function
const AboutUs = () => {
  return (
    <Flex py={24}>
      <Box display="flex" flexDirection="column" alignItems="center" w={640}>
        <Heading
          as="h1"
          fontSize="32px"
          fontWeight="bold"
          textAlign="center"
          maxW={460}
          pb={10}
        >
          Jenis Gangguan Kecemasan yang Umum Terjadi.
        </Heading>
// render Accordion component here
        <Accordion />
      </Box>
    </Flex>
  );
};

export default AboutUs;
