import {
  styled,
  Typography,
  Chip as MUIChip,
  ChipProps,
  Paper as MUIPaper,
  TypographyProps,
} from "@mui/material";

export const Paper = styled(MUIPaper)(({ theme }) => ({
  padding: theme.spacing(3),
  overflowY: "auto",
  maxHeight: theme.spacing(80),
}));

export const Title = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
}));

export const Month = styled("div")(({ theme }) => ({
  "&:not(:last-child)": {
    paddingBottom: theme.spacing(4),
  },
}));

export const MonthTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(1.5),
  textTransform: "capitalize",
}));

export const Li = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  "&:not(:first-of-type)": {
    paddingTop: theme.spacing(1.5),
  },
  "&:not(:last-child)": {
    paddingBottom: theme.spacing(1.5),
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.divider,
  },
}));

export const DescriptionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(1),
}));

export const DescriptionTexts = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const DescriptionTitle = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const Description = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineClamp: 2,
});

export const DataContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  textAlign: "end",
});

export const Chip = styled(MUIChip)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius,
}));

interface IWalletHistoryCompoundComponents {
  Paper: React.FC<React.DOMAttributes<HTMLDivElement>>;
  Title: React.FC<TypographyProps>;
  Month: React.FC<React.DOMAttributes<HTMLDivElement>>;
  MonthTitle: React.FC<TypographyProps>;
  Li: React.FC<React.DOMAttributes<HTMLLIElement>>;
  DescriptionContainer: React.FC<React.DOMAttributes<HTMLDivElement>>;
  DescriptionTexts: React.FC<React.DOMAttributes<HTMLDivElement>>;
  DescriptionTitle: React.FC<TypographyProps>;
  Description: React.FC<TypographyProps>;
  DataContainer: React.FC<React.DOMAttributes<HTMLDivElement>>;
  Chip: React.FC<ChipProps>;
}

const WalletHistory: React.FC & IWalletHistoryCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

WalletHistory.Paper = Paper;
WalletHistory.Title = Title;
WalletHistory.Month = Month;
WalletHistory.MonthTitle = MonthTitle;
WalletHistory.Li = Li;
WalletHistory.DescriptionContainer = DescriptionContainer;
WalletHistory.DescriptionTexts = DescriptionTexts;
WalletHistory.DescriptionTitle = DescriptionTitle;
WalletHistory.Description = Description;
WalletHistory.DataContainer = DataContainer;
WalletHistory.Chip = Chip;

export default WalletHistory;
