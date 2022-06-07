import { Container } from "@chakra-ui/react";
import HeroBanner from "../../components/HeroBanner";
import AboutUs from "../../components/about-us";

const LandingPage = () => {
  return (
    <Container display="flex" flexDirection="column" alignItems="center" maxW="-moz-max-content" px={16}>
      <HeroBanner />
      <AboutUs />
    </Container>
  );
};

export default LandingPage;
