import { Select, styled, outlinedInputClasses } from "@mui/material";

export interface StyledSelectProps {
  success?: boolean;
}

const StyledSelect = styled(Select, {
  shouldForwardProp: (prop) => prop !== "success",
  name: "StyledSelect",
  slot: "Root",
})<StyledSelectProps>(({ theme, success }) => ({
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: success ? theme.palette.success.dark : undefined,
    borderWidth: success ? 2 : undefined,
  },
}));

export default StyledSelect;
