import { styled, Paper as MuiPaper, PaperProps } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    minHeight: theme.spacing(70),
  },
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  borderStartStartRadius: theme.shape.borderRadius,
  borderStartEndRadius: theme.shape.borderRadius,
  backgroundImage: theme.custom.elevation[1],
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    width: "50%",
    borderStartEndRadius: 0,
    borderEndStartRadius: theme.shape.borderRadius,
    padding: theme.spacing(15, 0),
  },
}));

export const Body = styled("div")(({ theme }) => ({
  padding: theme.spacing(5, 3),
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    width: "50%",
    padding: theme.spacing(15, 0),
  },
}));

export const HeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  maxWidth: theme.spacing(45),
}));

export const ProductsContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    marginTop: "unset",
  },
}));

export const BodyContainer = styled("div")(({ theme }) => ({
  margin: "auto",
  width: "100%",
  maxWidth: theme.spacing(45),
}));

export const HeaderFooter = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    marginTop: theme.spacing(5),
  },
}));

export const BodyFooter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const Actions = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 3, 3),
}));

interface ICheckoutTemplateCompoundComponents {
  Paper: React.FC<PaperProps>;
  Header: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Body: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  HeaderContainer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  ProductsContainer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  HeaderFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  BodyFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  BodyContainer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Actions: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}

const CheckoutTemplate: React.FC & ICheckoutTemplateCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

CheckoutTemplate.Paper = Paper;
CheckoutTemplate.Header = Header;
CheckoutTemplate.Body = Body;
CheckoutTemplate.HeaderContainer = HeaderContainer;
CheckoutTemplate.ProductsContainer = ProductsContainer;
CheckoutTemplate.HeaderFooter = HeaderFooter;
CheckoutTemplate.BodyFooter = BodyFooter;
CheckoutTemplate.BodyContainer = BodyContainer;
CheckoutTemplate.Actions = Actions;

export default CheckoutTemplate;
