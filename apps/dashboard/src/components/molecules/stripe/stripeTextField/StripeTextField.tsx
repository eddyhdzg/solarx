import * as React from "react";
import {
  AuBankAccountElement,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  FpxBankElement,
  IbanElement,
  IdealBankElement,
} from "@stripe/react-stripe-js";
import { TextFieldProps } from "@mui/material";
import { StripeInput, StyledTextField } from "components";

type StripeElement =
  | typeof AuBankAccountElement
  | typeof CardCvcElement
  | typeof CardExpiryElement
  | typeof CardNumberElement
  | typeof FpxBankElement
  | typeof IbanElement
  | typeof IdealBankElement;

interface StripeTextFieldProps<T extends StripeElement>
  extends Omit<TextFieldProps, "onChange" | "inputComponent" | "inputProps"> {
  inputProps?: React.ComponentProps<T>;
  labelErrorMessage?: string;
  onChange?: React.ComponentProps<T>["onChange"];
  stripeElement?: T;
}

const StripeTextField = <T extends StripeElement>(
  props: StripeTextFieldProps<T>
) => {
  const {
    helperText,
    InputLabelProps,
    InputProps = {},
    inputProps,
    error,
    labelErrorMessage,
    stripeElement,
    ...other
  } = props;

  return (
    <StyledTextField
      fullWidth
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
      }}
      error={error}
      InputProps={{
        ...InputProps,
        // @ts-ignore
        inputProps: {
          ...inputProps,
          ...InputProps.inputProps,
          component: stripeElement,
        },
        inputComponent: StripeInput,
      }}
      helperText={error ? labelErrorMessage : helperText}
      {...other}
    />
  );
};

export function StripeTextFieldNumber(
  props: StripeTextFieldProps<typeof CardNumberElement>
) {
  return (
    <StripeTextField
      label="Credit Card Number"
      stripeElement={CardNumberElement}
      {...props}
    />
  );
}

export function StripeTextFieldExpiry(
  props: StripeTextFieldProps<typeof CardExpiryElement>
) {
  return (
    <StripeTextField
      label="Expires"
      stripeElement={CardExpiryElement}
      {...props}
    />
  );
}

export function StripeTextFieldCVC(
  props: StripeTextFieldProps<typeof CardCvcElement>
) {
  return (
    <StripeTextField
      label="CVC Code"
      stripeElement={CardCvcElement}
      {...props}
    />
  );
}