import { useCreateCrowdfundingPaymentMutation } from "hooks";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

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

  const handleCreatePaymentMethod = async (
    values: useHandleCreateCrowdfundingPaymentProps
  ) => {
    return createCrowdfundingPayment(values)
      .then(({ data }) => {
        console.log(data);

        enqueueSnackbar(t("snackbar.successfulPayment"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.errorPayment"), {
          variant: "error",
        });
      });
  };

  return handleCreatePaymentMethod;
};

export default useHandleCreateCrowdfundingPayment;
