import { Box } from "@chakra-ui/react";
import HeroBanner from "../../components/HeroBanner";
import windowsSize from "../../hooks/useWindowSize";

const LandingPage = () => {
  const windowSize = windowsSize();

  const Container = ({component}) => {
    return (
      <Box w={windowSize.width} h={windowSize.height}>
        <Box
          display="flex"
          h="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          {component}
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Container component={<HeroBanner />}/>
    </>
  );
};

export default LandingPage;
