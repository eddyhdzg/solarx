import { Container } from "@mui/material";
import {
  Notch,
  GradientLine,
  CreateNewsletterEmail,
  Footer,
  Header,
  Hero,
} from "components";

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
