import { Button, TextField, outlinedInputClasses, styled } from "@mui/material";

export const CTA = styled(Button)(({ theme, disabled }) => ({
  background: !disabled ? theme.custom.gradient2 : undefined,
  color: !disabled ? theme.palette.text.primary : undefined,
  fontWeight: 700,
  whiteSpace: "nowrap",
}));

export const Input = styled(TextField)(({ theme }) => ({
  [`& .${outlinedInputClasses.input}`]: {
    paddingRight: theme.spacing(1),
  },
}));
