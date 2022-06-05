import { Box } from "@chakra-ui/react";
import Accordion from "../Accordion";
import Content from "../Content/about-anxiety.json";

const AboutUs = () => {

    const ShowAccordion = () => {
        const data = Content.data.AboutAnxiety;
        return data.map((item, index) => {
            return (
                <Accordion key={index} title={item.title} content={item.content} />
            );
        });
    }
    return(
        <Box display="flex" flexDirection="column" w={640} gap={4}>
            <ShowAccordion />
        </Box>
    );
};

export default AboutUs;