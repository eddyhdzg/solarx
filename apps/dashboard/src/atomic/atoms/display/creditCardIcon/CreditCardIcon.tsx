import CreditCard from "@mui/icons-material/CreditCard";
import Amex from "assets/icons/Amex";
import MasterCard from "assets/icons/MasterCard";
import Visa from "assets/icons/Visa";
import { LiteralUnion, StripePaymentProcessorBrand } from "solarx-types";

export interface CreditCardIconProps {
  card?: LiteralUnion<StripePaymentProcessorBrand, string>;
  style?: React.CSSProperties;
}

export default function CreditCardIcon({ card, ...rest }: CreditCardIconProps) {
  switch (card) {
    case "amex":
      return <Amex {...rest} />;
    case "mastercard":
      return <MasterCard {...rest} />;
    case "visa":
      return <Visa {...rest} />;
    default:
      return <CreditCard {...rest} />;
  }
}
