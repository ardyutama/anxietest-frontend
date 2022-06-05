import { Box } from "@chakra-ui/react";
import HeroBanner from "../../components/HeroBanner";
import windowsSize from "../../hooks/useWindowSize";
import AboutUs from "../../components/about-us";
const LandingPage = () => {
  const windowSize = windowsSize();

  const Container = ({component}) => {
    return (
      <Box w={windowSize.width} h={windowSize.height}>
        <Box
          display="flex"
          h="100%"
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
      <Container component={<AboutUs />}/>
    </>
  );
};

export default LandingPage;
