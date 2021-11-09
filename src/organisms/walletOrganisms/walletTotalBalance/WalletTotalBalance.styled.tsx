import {
  styled,
  Paper as MUIPaper,
  PaperProps,
  Typography,
  TypographyProps,
} from "@mui/material";

const Body = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

const Paper = styled(MUIPaper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Div = styled("div")({
  display: "flex",
});

const TotalBalance = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  marginLeft: theme.spacing(1),
})) as typeof Typography;

const CashWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  flexGrow: 1,
  marginLeft: theme.spacing(7),
}));

const Cash = styled(Typography)(({ theme }) => ({
  color: theme.custom.cash,
})) as typeof Typography;

interface IWalletTotalBalanceCompoundComponents {
  Body: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  TotalBalance: React.FC<TypographyProps>;
  Div: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Paper: React.FC<PaperProps>;
  CashWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Cash: React.FC<TypographyProps>;
}

const WalletTotalBalance: React.FC & IWalletTotalBalanceCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

WalletTotalBalance.Body = Body;
WalletTotalBalance.TotalBalance = TotalBalance;
WalletTotalBalance.Div = Div;
WalletTotalBalance.Paper = Paper;
WalletTotalBalance.CashWrapper = CashWrapper;
WalletTotalBalance.Cash = Cash;

export default WalletTotalBalance;
