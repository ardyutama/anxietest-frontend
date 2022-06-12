import { Container } from "@chakra-ui/react";
import HeroBanner from "../../components/HeroBanner";
import AboutUs from "../../components/about-us";
import HowItWorks from "../../components/how-it-works";
import { CTA } from "../../components/CTA";
const LandingPage = () => {
  return (
    <Container display="flex" flexDirection="column" alignItems="center" maxW="-moz-max-content" px={16}>
      <HeroBanner />
      <AboutUs />
      <HowItWorks />
      <CTA />
    </Container>
  );
};

export default LandingPage;
