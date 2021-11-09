import { styled, FormControl } from "@mui/material";
import { GridItem } from "components";

export const Item = styled(GridItem)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));
