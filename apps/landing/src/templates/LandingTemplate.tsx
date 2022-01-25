import { Container } from "@mui/material";
import { CreateNewsletterEmail, Footer, Header, Hero } from "organisms";
import { GradientLine, Notch } from "components";

export default function LandingTemplate() {
  return (
    <>
      <Notch />
      <GradientLine />
      <Container maxWidth="md" component="main">
        <Header />
        <Hero />
        <CreateNewsletterEmail />
        <Footer />
      </Container>
    </>
  );
}
