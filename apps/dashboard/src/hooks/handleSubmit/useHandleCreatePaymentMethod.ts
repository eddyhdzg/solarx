import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import {
  ICreatePaymentMethodFormSchema,
  useCreatePaymentMethod,
  useCrowdfundingStore,
} from "hooks";
import { useUser } from "reactfire";
import { PaymentMethod } from "solarx-types";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import { UseFormReset } from "react-hook-form";
import shallow from "zustand/shallow";

const useHandleCreatePaymentMethod = () => {
  const stripe = useStripe();
  const elements = useElements();
  const createPaymentMethod = useCreatePaymentMethod();
  const { data } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const { dispatch } = useCrowdfundingStore(
    ({ dispatch }) => ({ dispatch }),
    shallow
  );

  const handleCreatePaymentMethod = async (
    reset: UseFormReset<ICreatePaymentMethodFormSchema>,
    billing_details?: Partial<PaymentMethod["billing_details"]>
  ) => {
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    dispatch({ type: "METHOD_TOGGLE_PROCESSING", payload: true });

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        ...(billing_details?.name && {
          name: billing_details?.name,
        }),
        ...(data?.email && {
          email: data?.email,
        }),
      },
    });

    if (error) {
      dispatch({ type: "METHOD_TOGGLE_PROCESSING", payload: false });
      return;
    }

    return createPaymentMethod(paymentMethod?.id)
      .then(() => {
        card.clear();
        reset();
        dispatch({ type: "METHOD_TOGGLE_LOADING", payload: true });
        dispatch({ type: "METHOD_TOGGLE_OPEN", payload: false });
        enqueueSnackbar(t("snackbar.paymentMethodCreated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.paymentMethodCreatedError"), {
          variant: "error",
        });
      })
      .finally(() => {
        dispatch({ type: "METHOD_TOGGLE_PROCESSING", payload: false });
      });
  };

  return handleCreatePaymentMethod;
};

export default useHandleCreatePaymentMethod;
