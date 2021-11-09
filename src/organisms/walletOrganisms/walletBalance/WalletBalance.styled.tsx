import {
  styled,
  alpha,
  Avatar as MUIAvatar,
  AvatarProps,
  ListItemText,
  ListItemTextProps,
  listItemTextClasses,
  Typography,
  TypographyProps,
  ListItem,
  ListItemProps,
} from "@mui/material";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import ShowChart from "@mui/icons-material/ShowChart";
import Payments from "@mui/icons-material/Payments";
import Stars from "@mui/icons-material/Stars";

export type Color = "stocks" | "cash" | "sxp";

export const Title = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  marginLeft: theme.spacing(2),
})) as typeof Typography;

export const Ul = styled(ListItem)({
  paddingLeft: 0,
  marginLeft: 0,
  paddingRight: 0,
  marginRight: 0,
});

export const Item = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme }) => ({ color }: { color: Color }) => ({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  borderRadius: theme.spacing(1),
  backgroundColor: alpha(theme.custom[color], 0.08),
  padding: theme.spacing(2),
}));

export const Avatar = styled(MUIAvatar, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme }) => ({ color }: { color: Color }) => ({
  backgroundColor: alpha(theme.custom[color], 0.16),
}));

export const Data = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const ListItemTexts = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme }) => ({ color }: { color: Color }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginBottom: theme.spacing(1),
  [`& .${listItemTextClasses.primary}`]: {
    fontWeight: 500,
    color: alpha(theme.custom[color], 0.6),
  },
  [`& .${listItemTextClasses.secondary}`]: {
    fontWeight: 600,
    color: theme.custom[color],
  },
}));

export const AccountBalanceWalletIcon = styled(AccountBalanceWallet)(
  ({ theme }) => ({
    color: theme.custom.totalBalance,
  })
);

export const ShowChartIcon = styled(ShowChart)(({ theme }) => ({
  color: theme.custom.stocks,
}));

export const PaymentsIcon = styled(Payments)(({ theme }) => ({
  color: theme.custom.cash,
}));

export const StarsIcon = styled(Stars)(({ theme }) => ({
  color: theme.custom.sxp,
}));

interface IWalletHistoryCompoundComponents {
  Title: React.FC<TypographyProps>;
  ListItem: React.FC<ListItemProps>;
  Item: React.FC<React.HTMLAttributes<HTMLDivElement> & { color: Color }>;
  Avatar: React.FC<AvatarProps & { color: Color }>;
  Data: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  ListItemTexts: React.FC<ListItemTextProps & { color: Color }>;
  AccountBalanceWalletIcon: React.FC;
  ShowChartIcon: React.FC;
  PaymentsIcon: React.FC;
  StarsIcon: React.FC;
}

const WalletBalance: React.FC & IWalletHistoryCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

WalletBalance.Title = Title;
WalletBalance.ListItem = ListItem;
WalletBalance.Item = Item;
WalletBalance.Avatar = Avatar;
WalletBalance.Data = Data;
WalletBalance.ListItemTexts = ListItemTexts;
WalletBalance.AccountBalanceWalletIcon = AccountBalanceWalletIcon;
WalletBalance.ShowChartIcon = ShowChartIcon;
WalletBalance.PaymentsIcon = PaymentsIcon;
WalletBalance.StarsIcon = StarsIcon;

export default WalletBalance;
