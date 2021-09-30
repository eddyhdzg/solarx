import { styled, Paper, Typography, FormControl } from "@mui/material";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";

export const WalletChartContainerRoot = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const HeaderWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

export const TitleWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    marginBottom: "unset",
  },
}));

export const MoneyTypography = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));

export const ButtonGroupContainer = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  flexGrow: 1,
});

export const StatsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: theme.spacing(-1),
}));

export const ArrowDropUpIcon = styled(ArrowDropUp)(({ theme }) => ({
  color: theme.custom.cash,
}));

export const StatsTypography = styled(Typography)(({ theme }) => ({
  color: theme.custom.cash,
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  minWidth: theme.spacing(15),
}));
