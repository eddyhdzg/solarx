import { styled } from "@mui/material";
import { Typography, TypographyProps } from "@mui/material";
import StripeLogo from "assets/icons/Stripe";
import { SVGProps } from "react";

export const Root = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "&>:first-child": {
    borderRight: "1px solid rgba(255,255,255,.1)",
    paddingRight: theme.spacing(3),
  },
  "&>:not(:first-child)": {
    paddingLeft: theme.spacing(3),
  },
}));

export const PoweredBy = styled(Typography)({
  display: "flex",
  alignItems: "flex-end",
});

export const Logo = styled(StripeLogo)({
  opacity: 0.5,
});

interface ICheckoutFooterCompoundComponents {
  Root: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  PoweredBy: React.FC<TypographyProps>;
  Logo: React.FC<SVGProps<SVGSVGElement>>;
}

const CheckoutFooter: React.FC & ICheckoutFooterCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

CheckoutFooter.Root = Root;
CheckoutFooter.PoweredBy = PoweredBy;
CheckoutFooter.Logo = Logo;

export default CheckoutFooter;
