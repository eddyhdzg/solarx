import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";

export default function useHandleCreateLocalPrices(pid: string) {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const functions = useFunctions();
  const createLocalPrices = httpsCallable(functions, "createLocalPrices_v0");

  const handleCreateLocalPrices = () => {
    createLocalPrices({ id: pid })
      .then(() => {
        enqueueSnackbar(t("snackbar.projectCreated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotCreated"), {
          variant: "error",
        });
      });
  };

  return handleCreateLocalPrices;
}
