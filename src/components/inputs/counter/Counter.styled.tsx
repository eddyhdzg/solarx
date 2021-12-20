import {
  Button,
  styled,
  InputBase,
  inputBaseClasses,
  alpha,
} from "@mui/material";

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

export const CounterButtonLeft = styled(Button)({
  border: "none !important",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  flexGrow: 1,
});
export const CounterButtonRight = styled(Button)({
  border: "none !important",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  flexGrow: 1,
});

export const CounterInput = styled(InputBase)(
  ({ theme }) =>
    ({ disabled }: { disabled: boolean }) => ({
      borderLeftColor: alpha(theme.palette.common.white, 0.15),
      borderRightColor: alpha(theme.palette.common.white, 0.15),
      borderLeftStyle: "solid",
      borderRightStyle: "solid",
      borderLeftWidth: "1px",
      borderRightWidth: "1px",
      maxWidth: theme.spacing(8),
      [`& .${inputBaseClasses.input}`]: {
        textAlign: "center",
        pointerEvents: disabled ? "none" : undefined,
      },
    })
);
