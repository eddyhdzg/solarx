import { useRole, useProjectSharesExist } from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "solarx-types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

export default function useHandleTriggerGenerateShares() {
  const { t } = useTranslation();
  const role = useRole();
  const functions = useFunctions();
  const createShares = httpsCallable<{ id?: string }, boolean>(
    functions,
    "createShares_v0"
  );
  const { id } = useParams<ProjectIDParams>();
  const projectSharesExist = useProjectSharesExist(id);
  const { enqueueSnackbar } = useSnackbar();
  const disabled = role !== "SUPER_USER" || projectSharesExist;

  const handleTriggerGenerateShares = () => {
    createShares({ id })
      .then(() => {
        enqueueSnackbar(t("snackbar.panelsCreated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.panelsNotCreated"), {
          variant: "error",
        });
      });
  };

  return { disabled, projectSharesExist, handleTriggerGenerateShares };
}
