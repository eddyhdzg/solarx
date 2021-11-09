import { Box, Button, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { CreateCrowdfundingPaymentFormSchema } from "hooks";
import { SubmitForm } from "types";
import { PaymentMethods } from "organisms";
import { CreatePaymentMethodForm } from "forms";
import { checkKeyDown } from "utils";

interface CreateCrowdfundingPaymentFormLayoutProps {
  onSubmit: SubmitForm;
}

const CreateCrowdfundingPaymentFormLayout: React.FC<CreateCrowdfundingPaymentFormLayoutProps> =
  ({ onSubmit }) => {
    const {
      formState: { isValid },
    } = useFormContext<CreateCrowdfundingPaymentFormSchema>();

    return (
      <>
        <Box
          sx={{
            mb: 1.5,
          }}
        >
          <Typography variant="subtitle1">Card Details</Typography>
          <Typography variant="caption" color="textSecondary">
            Select payment method
          </Typography>
        </Box>
        <Box
          sx={{
            mb: 1.5,
          }}
        >
          <PaymentMethods />
        </Box>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <CreatePaymentMethodForm />
        </Box>
        <form
          noValidate
          autoComplete="off"
          onKeyDown={checkKeyDown}
          onSubmit={onSubmit}
        >
          <Button
            size="large"
            variant="contained"
            type="submit"
            fullWidth
            disabled={!isValid}
          >
            Pay
          </Button>
        </form>
      </>
    );
  };

export default CreateCrowdfundingPaymentFormLayout;
