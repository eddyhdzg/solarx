import { useStripe } from "@stripe/react-stripe-js";
import {
  useCreateCrowdfundingPaymentMutation,
  useCrowdfundingStore,
} from "hooks";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import shallow from "zustand/shallow";
import { doc, setDoc } from "firebase/firestore";
import { useFirestore, useUser } from "reactfire";

export interface useHandleCreateCrowdfundingPaymentProps {
  payment_method?: string;
  priceId?: string;
  projectId?: string;
  qty?: number;
}

const useHandleCreateCrowdfundingPayment = () => {
  const createCrowdfundingPayment = useCreateCrowdfundingPaymentMutation();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const { dispatch } = useCrowdfundingStore(
    ({ dispatch }) => ({ dispatch }),
    shallow
  );
  const stripe = useStripe();
  const firestore = useFirestore();
  const user = useUser();
  const uid = user.data?.uid || "";

  const handleCardAction = async (payment: any, docId: any) => {
    const { error, paymentIntent } =
      (await stripe?.handleCardAction(payment.client_secret)) || {};
    if (error) {
      enqueueSnackbar(t("snackbar.errorPayment"), {
        variant: "error",
      });
      payment = error.payment_intent;
    } else if (paymentIntent) {
      payment = paymentIntent;
    }

    const paymentRef = doc(firestore, "investors", uid, "payments", docId);

    setDoc(
      paymentRef,
      { id: payment.id, status: payment.status },
      { merge: true }
    ).then(() => {
      dispatch({
        type: "ALERT_SEND_DATA",
        payload: {
          id: payment.id,
          status: payment.status,
        },
      });
    });
  };

  const handleCreatePaymentMethod = async (
    values: useHandleCreateCrowdfundingPaymentProps
  ) => {
    dispatch({ type: "PAYMENT_TOGGLE_PROCESSING", payload: true });

    return createCrowdfundingPayment(values)
      .then(({ data }) => {
        if (data.status === "canceled") {
          enqueueSnackbar(t("snackbar.errorPayment"), {
            variant: "error",
          });
          return;
        } else if (data.status === "requires_action") {
          handleCardAction(data, data?.doc);
        } else {
          dispatch({
            type: "ALERT_SEND_DATA",
            payload: {
              id: data.id,
              status: data.status,
            },
          });
        }
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.errorPayment"), {
          variant: "error",
        });
      })
      .finally(() => {
        dispatch({ type: "PAYMENT_TOGGLE_PROCESSING", payload: false });
      });
  };

  return handleCreatePaymentMethod;
};

export default useHandleCreateCrowdfundingPayment;
