import { Box, Heading, Image} from "@chakra-ui/react";
import ButtonLink from "../Button";

export function CTA() {
  return (
    <Box
      w="full"
      display="flex"
      flexDirection='column'
      mx={18}
      my={12}
      h="270px"
      backgroundColor="main.surface"
      borderRadius={"16px"}
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize="32px">Mulai Tes Sekarang</Heading>
      <ButtonLink path="/" text="Ambil Tes" mt={8}/>
      <Image src="/img/illustration.svg" position="absolute" left="112px" bottom="80px"/>
      <Image src="/img/Blob.svg" position="absolute" right="65px" bottom="80px"/>
    </Box>
  );
}
