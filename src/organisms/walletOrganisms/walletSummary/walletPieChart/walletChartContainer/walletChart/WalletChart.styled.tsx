import { styled, useTheme, alpha } from "@mui/material";

export const lineChartMargins = {
  left: 8,
  top: 24,
  bottom: 24,
  right: 8,
};

export const WalletChartRoot = styled("div")(({ theme }) => ({
  width: "100%",
  height: theme.spacing(50),
}));

export const useWalletChartStyles = () => {
  const theme = useTheme();

  const tooltipContentStyle = {
    backgroundColor: alpha(theme.palette.background.default, 0.85),
    borderRadius: theme.spacing(0.5),
    borderColor: theme.palette.divider,
  };

  const { totalBalance, stocks, cash } = theme.custom;

  return { tooltipContentStyle, totalBalance, stocks, cash };
};
