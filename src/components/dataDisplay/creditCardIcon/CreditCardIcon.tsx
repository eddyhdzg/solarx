import CreditCard from "@mui/icons-material/CreditCard";
import Amex from "assets/icons/Amex";
import MasterCard from "assets/icons/MasterCard";
import Visa from "assets/icons/Visa";

// "amex" | "mastercard" | "visa";
export interface CreditCardIconProps {
  card?: string;
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
