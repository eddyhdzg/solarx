import {
  styled,
  Theme,
  Button as MuiButton,
  buttonClasses,
  ButtonProps,
} from "@mui/material";
import { StyledComponent } from "@mui/styled-engine";
import { MUIStyledCommonProps } from "@mui/system";

export const Ul = styled("ul")({
  display: "flex",
});

export const Li = styled("li")({
  display: "flex",
  justifyContent: "space-between",
  flexGrow: 1,
});

export const Container = styled("div")({
  display: "flex",
});

export const Data = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const Numbers = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

export const Img = styled("img")(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  objectFit: "cover",
  marginRight: theme.spacing(1),
}));

export const Button = styled(MuiButton)({
  [`& .${buttonClasses.endIcon}`]: {
    marginLeft: 0,
  },
});

interface ICheckoutProductsCompoundComponents {
  Ul: React.FC<React.HTMLAttributes<HTMLUListElement>>;
  Li: React.FC<React.HTMLAttributes<HTMLLIElement>>;
  Container: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Data: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Numbers: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Img: StyledComponent<
    MUIStyledCommonProps<Theme>,
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    {}
  >;
  Button: React.FC<ButtonProps>;
}

const CheckoutProducts: React.FC & ICheckoutProductsCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

CheckoutProducts.Ul = Ul;
CheckoutProducts.Li = Li;
CheckoutProducts.Container = Container;
CheckoutProducts.Data = Data;
CheckoutProducts.Numbers = Numbers;
CheckoutProducts.Img = Img;
CheckoutProducts.Button = Button;

export default CheckoutProducts;
