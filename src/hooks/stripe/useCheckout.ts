import { Stripe } from "@stripe/stripe-js/types/stripe-js";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { useFirestore, useUser } from "reactfire";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import { Checkout } from "types";
import { useLocation } from "react-router-dom";

export default function useCheckout(
  stripe: Stripe | null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const loadCheckout = async (priceId = "", quantity = 1) => {
    const colRef = collection(
      firestore,
      "users",
      user?.uid || "null",
      "checkout_sessions"
    );

    const docRef = await addDoc(colRef, {
      mode: "payment",
      price: priceId,
      success_url: window.location.origin + pathname,
      cancel_url: window.location.origin + pathname,
      quantity,
    });

    onSnapshot(docRef, {
      next: (snapshot) => {
        console.log(snapshot.data());
        const checkout = snapshot.data() as Checkout;
        const { sessionId } = checkout;

        if (stripe && sessionId) {
          stripe.redirectToCheckout({
            sessionId,
          });
        }
      },
      error: () => {
        enqueueSnackbar(t("snackbar.checkoutError"), { variant: "error" });
        setLoading(false);
        return undefined;
      },
      complete: () => {
        setLoading(false);
        return undefined;
      },
    });
  };

  return loadCheckout;
}
