import { TextField, styled, outlinedInputClasses } from "@mui/material";

// @ts-ignore
const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "success",
})(({ theme }) => ({ success }: { success: boolean }) => ({
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    // @ts-ignore
    borderColor: success ? theme.palette.success.dark : undefined,
    borderWidth: success ? 2 : undefined,
  },
})) as typeof TextField;

export default StyledTextField;
