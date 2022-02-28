import { TextField, outlinedInputClasses, styled } from "@mui/material";

export const Input = styled(TextField)(({ theme }) => ({
  [`& .${outlinedInputClasses.input}`]: {
    paddingRight: theme.spacing(1),
  },
}));
