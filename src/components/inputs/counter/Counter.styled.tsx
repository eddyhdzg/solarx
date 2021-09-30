import { Button, styled, InputBase, inputBaseClasses } from "@mui/material";

export const CounterRoot = styled("div", {
  shouldForwardProp: (prop) => prop !== "error",
})(({ theme }) => ({ error }: { error: boolean }) => ({
  display: "flex",
  border: 1,
  borderColor: error ? theme.palette.error.main : theme.palette.grey[700],
  borderStyle: "solid",
  borderRadius: theme.shape.borderRadius,
  userSelect: "none",
}));

export const CounterButton = styled(Button)({
  border: "none !important",
});

export const CounterInput = styled(InputBase)(({ theme }) => ({
  maxWidth: theme.spacing(8),
  [`& .${inputBaseClasses.input}`]: {
    textAlign: "center",
  },
}));
