import { Box, Heading } from "@chakra-ui/react";
import Accordion from "../Accordion";
import Content from "../Content/about-anxiety.json";

const AboutUs = () => {
//   const ShowAccordion = () => {
//     const data = Content.data.AboutAnxiety;
//     return data.map((item, index) => {
//       return (
//         <Accordion key={index} title={item.title} content={item.content} />
//       );
//     });
//   };
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
