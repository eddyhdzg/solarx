import {
  Avatar,
  Paper,
  Typography,
  TextField,
  styled,
  alpha,
} from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: theme.spacing(100),
  display: "flex",
  overflow: "auto",
  flexDirection: "column",
}));

export const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

export const Row = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
})) as typeof Typography;

export const Caption = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
})) as typeof Typography;

export const AvatarContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "success",
})(({ theme }) => (props) => ({
  "& input:valid + fieldset": {
    borderColor: props.success && theme.palette.success.dark,
    borderWidth: props.success && 2,
  },
})) as any;

export const Actions = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.08),
  padding: theme.spacing(2),
  borderEndStartRadius: theme.shape.borderRadius,
  borderEndEndRadius: theme.shape.borderRadius,
  display: "flex",
  justifyContent: "flex-end",
}));
