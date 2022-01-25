import { CreditCardIcon } from "components";
import {
  ListItemButton,
  ListItemButtonProps,
  listItemButtonClasses,
  styled,
  alpha,
  ListItemText,
  listItemTextClasses,
  List,
  ListProps,
} from "@mui/material";
import { CreditCardIconProps } from "../../../../components/dataDisplay/creditCardIcon/CreditCardIcon";

export const StyledList = styled(List)({
  width: "100%",
  paddingTop: 0,
  paddingBottom: 0,
});

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.palette.divider,
  borderStyle: "solid",
  borderRadius: theme.shape.borderRadius,
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  [`&.${listItemButtonClasses.selected}`]: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: alpha(theme.palette.primary.main, 0.5),
    borderStyle: "solid",
  },
  "&:not(:last-child)": {
    marginBottom: theme.spacing(1),
  },
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  [`& .${listItemTextClasses.primary}`]: {
    fontSize: 14,
    fontWeight: 600,
  },
  [`& .${listItemTextClasses.secondary}`]: {
    fontSize: 12,
  },
})) as typeof ListItemText;

export const StyledCreditCardIcon = styled(CreditCardIcon)(({ theme }) => ({
  width: theme.spacing(3),
  transform: "scale(1.5)",
}));

export const IconContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1.5),
  top: theme.spacing(1.5),
}));

interface IPaymentMethodsCompoundComponents {
  StyledList: React.FC<ListProps>;
  StyledListItemButton: React.FC<ListItemButtonProps>;
  StyledListItemText: any;
  StyledCreditCardIcon: React.FC<CreditCardIconProps>;
  IconContainer: React.FC<React.DOMAttributes<HTMLDivElement>>;
}

const PaymentMethods: React.FC & IPaymentMethodsCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

PaymentMethods.StyledList = StyledList;
PaymentMethods.StyledListItemButton = StyledListItemButton;
PaymentMethods.StyledListItemText = StyledListItemText;
PaymentMethods.StyledCreditCardIcon = StyledCreditCardIcon;
PaymentMethods.IconContainer = IconContainer;

export default PaymentMethods;
