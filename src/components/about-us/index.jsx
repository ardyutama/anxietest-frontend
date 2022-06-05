import { Box, Heading } from "@chakra-ui/react";
import Accordion from "../Accordion";

const AboutUs = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={24} w={640}>
      <Heading
        as="h1"
        fontSize="32px"
        fontWeight="bold"
        textAlign="center"
        maxW={460}
        pb={10}
      >Jenis Gangguan Kecemasan yang Umum Terjadi.</Heading>
        <Accordion />
    </Box>
  );
};

export default AboutUs;
