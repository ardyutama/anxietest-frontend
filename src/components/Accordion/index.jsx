import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Content from "../Content/about-anxiety.json";

const CustomAccordion = () => {
  const ShowAccordion = () => {
    const data = Content.data.AboutAnxiety;
    return data.map((item, index) => {
      return (
        <AccordionItem
          as="div"
          border="1px"
          color="#DADADA"
          rounded="8px"
          _expanded={{ border: "0px" }}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.content}</AccordionPanel>
        </AccordionItem>
      );
    });
  };
  return (
    <Accordion allowToggle as="div" display="flex" flexDirection="column" gap={2} w="100%">
        <ShowAccordion />
    </Accordion>
  );
};

export default CustomAccordion;
