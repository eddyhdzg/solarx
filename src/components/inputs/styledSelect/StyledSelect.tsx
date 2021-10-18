import { Select, styled, outlinedInputClasses } from "@mui/material";

// @ts-ignore
const StyledSelect = styled(Select, {
  shouldForwardProp: (prop) => prop !== "success",
})(({ theme }) => ({ success }: { success: boolean }) => ({
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    // @ts-ignore
    borderColor: success ? theme.palette.success.dark : undefined,
    borderWidth: success ? 2 : undefined,
  },
})) as typeof Select;

export default StyledSelect;
