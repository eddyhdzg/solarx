import { Box, Link, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormContext } from "react-hook-form";
import {
  CreateCrowdfundingPaymentFormSchema,
  useCrowdfundingStore,
  useHandleCreateCrowdfundingPayment,
  useQueryParams,
  useProjectPrice,
} from "hooks";
import { ProjectIDParams } from "solarx-types";
import { PaymentMethods } from "organisms";
import { CreatePaymentMethodForm } from "forms";
import { checkKeyDown } from "utils";
import shallow from "zustand/shallow";
import { useParams } from "react-router-dom";
import { StripeProvider } from "providers";
import { useTranslation } from "react-i18next";

const PayButtonContainer = () => {
  const { t } = useTranslation();

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
  const {
    data: { quantity = 0, sharesSold = 0 },
  } = useProjectPrice(id, pid);
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

  const left = quantity - sharesSold;
  const numberQty = Number(qty) || 0;
  const disabled = !isValid || left < numberQty;

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
        disabled={disabled}
      >
        {t("pages.crowdfunding.checkout.pay")}
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
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          mb: 1.5,
        }}
      >
        <Typography variant="subtitle1">
          {t("pages.crowdfunding.checkout.cardDetails")}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {t("pages.crowdfunding.checkout.selectPaymentMethod")}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {t("pages.crowdfunding.checkout.useAnyOfThe")}
          <Link href="https://stripe.com/docs/testing#international-cards">
            {t("pages.crowdfunding.checkout.stripeTestCards")}
          </Link>
          {t("pages.crowdfunding.checkout.forThisDemo")}
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
