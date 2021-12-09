import { useState } from "react";
import { Button, Collapse, Grid, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Controller, useFormContext } from "react-hook-form";
import { CardElement } from "@stripe/react-stripe-js";
import {
  useCardElementOptions,
  ICreatePaymentMethodFormSchema,
  useCrowdfundingStore,
} from "hooks";
import shallow from "zustand/shallow";
import { checkKeyDown } from "utils";
import { GridItem, StyledTextField } from "components";
import { SubmitForm } from "types";
import AddCardIcon from "@mui/icons-material/AddCard";
import Styled from "../ProjectCheckout.styled";

interface PaymentMethodFormLayoutProps {
  onSubmit: SubmitForm;
}

export default function PaymentMethodFormLayout({
  onSubmit,
}: PaymentMethodFormLayoutProps) {
  const options = useCardElementOptions();
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<ICreatePaymentMethodFormSchema>();

  const [error, setError] = useState<string | undefined>(undefined);
  const [complete, setComplete] = useState(false);
  const { dispatch, method } = useCrowdfundingStore(
    ({ dispatch, method }) => ({ dispatch, method }),
    shallow
  );

  const handleOpen = () => {
    dispatch({ type: "METHOD_TOGGLE_OPEN", payload: !method.open });
  };

  return (
    <Styled.Root open={method.open}>
      <Button
        variant="text"
        color="inherit"
        onClick={handleOpen}
        startIcon={<AddCardIcon />}
      >
        Add new payment method
      </Button>
      <Collapse in={method.open} timeout="auto">
        <Styled.FormContainer>
          <form
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
            onKeyDown={checkKeyDown}
          >
            <Grid container spacing={3}>
              <GridItem>
                <CardElement
                  options={options}
                  onChange={(e) => {
                    setComplete(e.complete);
                    setError(e.error?.message);
                  }}
                />
                {error && (
                  <Typography variant="caption" color="error">
                    {error}
                  </Typography>
                )}
              </GridItem>
              <GridItem>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <StyledTextField
                        id="name-on-card"
                        label="Name on card"
                        variant="outlined"
                        fullWidth
                        required
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                        inputProps={{
                          autoComplete: "disabled",
                        }}
                        success={fieldState.isDirty}
                        {...field}
                      />
                    );
                  }}
                />
              </GridItem>
            </Grid>

            <Styled.ButtonContainer>
              <LoadingButton
                variant="outlined"
                type="submit"
                loading={method.processing}
                disabled={!isValid || !isDirty || !complete}
              >
                Add Payment Method
              </LoadingButton>
            </Styled.ButtonContainer>
          </form>
        </Styled.FormContainer>
      </Collapse>
    </Styled.Root>
  );
}
