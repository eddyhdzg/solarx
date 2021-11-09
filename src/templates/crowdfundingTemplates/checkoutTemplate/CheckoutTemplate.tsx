import { Container } from "@mui/material";
import { CheckoutHeader, CheckoutFooter, CheckoutProducts } from "organisms";
import Styled from "./CheckoutTemplate.styled";
import { CreateCrowdfundingPaymentForm } from "forms";

export default function CheckoutTemplate() {
  return (
    <Container maxWidth="lg" disableGutters>
      <Styled.Paper>
        <Styled.Header>
          <Styled.HeaderContainer>
            <CheckoutHeader />
            <Styled.ProductsContainer>
              <CheckoutProducts />
            </Styled.ProductsContainer>
            <Styled.HeaderFooter>
              <CheckoutFooter />
            </Styled.HeaderFooter>
          </Styled.HeaderContainer>
        </Styled.Header>
        <Styled.Body>
          <Styled.BodyContainer>
            <CreateCrowdfundingPaymentForm />
            <Styled.BodyFooter>
              <CheckoutFooter />
            </Styled.BodyFooter>
          </Styled.BodyContainer>
        </Styled.Body>
      </Styled.Paper>
    </Container>
  );
}
