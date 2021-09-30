import {
  TextField,
  styled,
  alpha,
  Divider,
  Typography,
  Grid,
  outlinedInputClasses,
} from "@mui/material";

export const Section = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const Titles = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

// @ts-ignore
export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "success",
})(({ theme }) => ({ success }: { success: boolean }) => ({
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    // @ts-ignore
    borderColor: success ? theme.palette.success.dark : undefined,
    borderWidth: success ? 2 : undefined,
  },
})) as typeof TextField;

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
