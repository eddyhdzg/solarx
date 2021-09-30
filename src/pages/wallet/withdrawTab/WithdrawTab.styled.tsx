import { styled, FormControl } from "@mui/material";

export const InputsContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(4),
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const SummaryContainer = styled("ul")(({ theme }) => ({
  textAlign: "end",
  marginBottom: theme.spacing(3),
}));
