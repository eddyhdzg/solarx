import * as React from "react";
import { useTheme, InputBaseComponentProps, alpha } from "@mui/material";

const StripeInput = React.forwardRef<any, InputBaseComponentProps>(
  function StripeInput(props, ref) {
    const { component: Component, options, ...other } = props;
    const theme = useTheme();
    const [mountNode, setMountNode] = React.useState<any | null>(null);

    React.useImperativeHandle(
      ref,
      () => ({
        focus: () => mountNode.focus(),
      }),
      [mountNode]
    );

    return (
      <Component
        onReady={setMountNode}
        options={{
          ...options,
          style: {
            base: {
              color: theme.palette.text.primary,
              backgroundColor: "rgba(0,0,0,0.62)",
              fontSize: "16px",
              lineHeight: "1.4375em",
              fontFamily: theme.typography.fontFamily,
              "::placeholder": {
                color: alpha(theme.palette.text.primary, 0.42),
              },
            },
            invalid: {
              color: theme.palette.error.main,
            },
          },
        }}
        {...other}
      />
    );
  }
);

export default StripeInput;
