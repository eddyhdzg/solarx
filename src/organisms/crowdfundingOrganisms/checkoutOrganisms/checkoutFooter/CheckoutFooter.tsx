import Styled from "./CheckoutFooter.styled";
import { Typography } from "@mui/material";

export default function CheckoutFooter() {
  return (
    <Styled.Root>
      <Styled.PoweredBy variant="caption" color="textSecondary">
        Powered by
        <Styled.Logo width="40px" />
      </Styled.PoweredBy>
      <Typography variant="caption" color="textSecondary">
        Terms
      </Typography>
      <Typography variant="caption" color="textSecondary">
        Privacy
      </Typography>
    </Styled.Root>
  );
}
