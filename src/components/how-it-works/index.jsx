import { Box, Circle, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Content from "../../components/Content/about-anxiety.json";
const HowItWorks = () => {
  const footer =
    "Catatan: Hasil dari tes ini bukanlah pengganti diagnosa asli dari dokter psikologi, Gangguan kesehatan mental hanya dapat didiagnosis oleh profesional perawatan kesehatan berlisensi. Jadikan hasil dari tes ini sebagai batu loncatan dalam memeriksa diri Anda kepada dokter psikologi profesional.";

  const Title = ({ header, content, item }) => {
    return (
      <Box display="flex" flexDirection="column" maxW="330">
        <Flex alignItems="center" gap="8px" pb="4px">
          <Circle bg="main.primary" color="white" p={4} size="24px">
            <Heading fontSize="14px" textColor="white">
              {item}
            </Heading>
          </Circle>
          <Heading fontSize="16" pb={1}>
            {header}
          </Heading>
        </Flex>
        <p>{content}</p>
      </Box>
    );
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      pt={24}
      alignItems="center"
      pb={44}
      maxW="990px"
    >
      <Heading>Bagaimana Tes ini Bekerja ? </Heading>
      <Box display="flex" pt={10} alignItems="center" gap={18} >
        <Box display="flex" flexDirection="column" gap={10}>
          {Content.data.HowTo.map((item, index) => {
            return (
              <Title
                header={item.title}
                content={item.content}
                item={index + 1}
              />
            );
          })}
        </Box>
        <Image src="/img/image-1.svg" />
      </Box>
      <Text textAlign="center" pt={10} color="#5A5A5A" >
        {footer}
      </Text>
    </Box>
  );
};

export default HowItWorks;
