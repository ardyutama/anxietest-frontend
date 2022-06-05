import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const CustomAccordion = ({ title, content }) => {
  return (
      <Accordion allowToggle>
        <AccordionItem as="div" border="1px" color="#DADADA" rounded="8px" _expanded={{border:"0px"}} >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {content}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  );
};

export default CustomAccordion;
