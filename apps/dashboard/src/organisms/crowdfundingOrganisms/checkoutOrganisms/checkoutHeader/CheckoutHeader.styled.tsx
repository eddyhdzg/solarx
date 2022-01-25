import { styled } from "@mui/material";

export const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    borderStartEndRadius: 0,
    borderEndStartRadius: theme.shape.borderRadius,
  },
}));

interface ICheckoutHeaderCompoundComponents {
  Root: React.FC<React.DOMAttributes<HTMLDivElement>>;
}

const CheckoutHeader: React.FC & ICheckoutHeaderCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

CheckoutHeader.Root = Root;

export default CheckoutHeader;
