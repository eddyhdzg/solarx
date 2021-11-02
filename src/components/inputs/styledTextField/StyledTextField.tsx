import { TextField, styled, outlinedInputClasses } from "@mui/material";

export interface IStyledTextFieldProps {
  success?: boolean;
}

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "success",
  name: "StyledTextField",
  slot: "Root",
})<IStyledTextFieldProps>(({ theme, success }) => ({
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: success ? theme.palette.success.dark : undefined,
    borderWidth: success ? 2 : undefined,
  },
}));

export default StyledTextField;
