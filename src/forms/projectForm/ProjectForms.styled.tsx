import {
  styled,
  alpha,
  Divider,
  Typography,
  Grid,
  TableContainer,
  TableCell,
} from "@mui/material";

export const Section = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const Titles = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const Actions = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.08),
  padding: theme.spacing(2),
  borderEndStartRadius: theme.shape.borderRadius,
  borderEndEndRadius: theme.shape.borderRadius,
  display: "flex",
  justifyContent: "flex-end",
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const ImageTypography = styled(Typography)(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(2),
})) as typeof Typography;

export const MB3Grid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const TableContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const TableCellID = styled(TableCell)({
  minWidth: 200,
});

export const TableCellDescription = styled(TableCell)({
  minWidth: 300,
});

export const TableCellNumber = styled(TableCell)({
  minWidth: 120,
});

export const StyledTableContainer = styled(TableContainer)({
  "& th, & td": {
    borderBottomColor: "transparent",
  },
});
