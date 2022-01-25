import {
  styled,
  alpha,
  Divider,
  Typography,
  TableContainer,
  TableCell,
  InputAdornment,
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

export const TableContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const TableCellDescription = styled(TableCell)({
  minWidth: 300,
});

export const TableCellNumber = styled(TableCell)({
  minWidth: 120,
});

export const TableCellLast = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})(({ theme }) => (props: { scrolled: boolean }) => ({
  position: "sticky",
  right: -1,
  backgroundColor: theme.palette.background.default,
  backgroundImage: theme.custom.elevation[3],
  boxShadow: props.scrolled
    ? "inset 10px 0 8px -8px rgba(0,0,0,0.2)"
    : undefined,
}));

export const StyledTableContainer = styled(TableContainer)({
  "& th, & td": {
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
});

export const StyledInputAdornment = styled(InputAdornment)({
  marginRight: 0,
  opacity: 0.5,
});

export const Img = styled("img")(({ theme }) => ({
  maxWidth: theme.spacing(40),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(3),
}));
