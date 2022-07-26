import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";

export default function useHandleCreateLocalProject() {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const functions = useFunctions();
  const createLocalProject = httpsCallable(functions, "createLocalProject_v0");

  const handleCreateLocalProject = () => {
    createLocalProject()
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

  return handleCreateLocalProject;
}
