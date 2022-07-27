import { IconButton, DialogContent, styled } from "@mui/material";
import Check from "@mui/icons-material/Check";

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const Content = styled(DialogContent)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const CheckIcon = styled(Check)(({ theme }) => ({
  fontSize: "40px",
  marginBottom: theme.spacing(2),
  color: theme.palette.success.main,
}));
