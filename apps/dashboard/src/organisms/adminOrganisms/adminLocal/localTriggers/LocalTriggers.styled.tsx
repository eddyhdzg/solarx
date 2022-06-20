import { styled, FormControl } from "@mui/material";
import { GridItem } from "atomic";

export const Item = styled(GridItem)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: theme.spacing(20),
  marginRight: theme.spacing(2),
}));
