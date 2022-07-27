import { Container, Box } from "@mui/material";
import {
  CheckoutAlert,
  CheckoutHeader,
  CheckoutFooter,
  CheckoutProducts,
  CreateCrowdfundingPaymentForm,
} from "components";
import Styled from "./CheckoutTemplate.styled";

export default function CheckoutTemplate() {
  return (
    <>
      <Box
        sx={{
          mb: {
            xs: 2,
            md: 3,
          },
        }}
      />
      <Container maxWidth="2xl">
        <Styled.Paper>
          <Styled.Header>
            <Styled.HeaderContainer>
              <div>
                <Box
                  sx={{
                    mb: {
                      xs: 2,
                      lg: 4,
                    },
                  }}
                >
                  <CheckoutHeader />
                </Box>
                <CheckoutProducts />
              </div>
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
      <CheckoutAlert />
    </>
  );
}
