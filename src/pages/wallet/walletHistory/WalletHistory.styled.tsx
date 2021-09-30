import { styled, Paper, Typography, Chip } from "@mui/material";

export const WalletHistoryPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  overflowY: "auto",
  maxHeight: theme.spacing(80),
}));

export const Title = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
}));

export const MonthContainer = styled("div")(({ theme }) => ({
  "&:not(:last-child)": {
    paddingBottom: theme.spacing(4),
  },
}));

export const MonthTypography = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(1.5),
}));

export const TransactionContainer = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
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

export const DescriptionContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const DescriptionTexts = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const DescriptionTitle = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  "-webkit-line-clamp": "1",
  "-webkit-box-orient": "vertical",
});

export const Description = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  "-webkit-line-clamp": "2",
  "-webkit-box-orient": "vertical",
});

export const DataContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  textAlign: "end",
});

export const StyledChip = styled(Chip)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius,
}));
