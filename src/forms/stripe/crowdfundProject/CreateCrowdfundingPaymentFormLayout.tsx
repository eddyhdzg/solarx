import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormContext } from "react-hook-form";
import {
  CreateCrowdfundingPaymentFormSchema,
  useCrowdfundingStore,
  useHandleCreateCrowdfundingPayment,
  useQueryParams,
} from "hooks";
import { ProjectIDParams } from "types";
import { PaymentMethods } from "organisms";
import { CreatePaymentMethodForm } from "forms";
import { checkKeyDown } from "utils";
import shallow from "zustand/shallow";
import { useParams } from "react-router-dom";
import { StripeProvider } from "providers";

const PayButtonContainer = () => {
  const {
    formState: { isValid },
    handleSubmit,
  } = useFormContext<CreateCrowdfundingPaymentFormSchema>();
  const handleCreateCrowdfundingPayment = useHandleCreateCrowdfundingPayment();
  const { id } = useParams<ProjectIDParams>();
  const { pid = "", qty = "0" } = useQueryParams() as {
    pid: string;
    qty: string;
  };
  const { payment } = useCrowdfundingStore(
    ({ payment }) => ({ payment }),
    shallow
  );

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();
    handleCreateCrowdfundingPayment({
      payment_method: values.paymentMethod,
      priceId: pid,
      projectId: id,
      qty: Number(qty),
    });
  });

  return (
    <form
      noValidate
      autoComplete="off"
      onKeyDown={checkKeyDown}
      onSubmit={onSubmit}
    >
      <LoadingButton
        size="large"
        variant="contained"
        type="submit"
        fullWidth
        loading={payment.processing}
        disabled={!isValid}
      >
        Pay
      </LoadingButton>
    </form>
  );
};

const WrappedPayButtonContainer = () => {
  return (
    <StripeProvider>
      <PayButtonContainer />
    </StripeProvider>
  );
};

const CreateCrowdfundingPaymentFormLayout: React.FC = () => {
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
      <WrappedPayButtonContainer />
    </>
  );
};

export default CreateCrowdfundingPaymentFormLayout;
