import { useRole, useProjectPanelsExist } from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "solarx-types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

export default function useHandleTriggerGeneratePanels() {
  const { t } = useTranslation();
  const role = useRole();
  const functions = useFunctions();
  const createPanels = httpsCallable<{ id?: string }, boolean>(
    functions,
    "createPanels_v0"
  );
  const { id } = useParams<ProjectIDParams>();
  const projectPanelsExist = useProjectPanelsExist(id);
  const { enqueueSnackbar } = useSnackbar();
  const disabled = role !== "SUPER_USER" || projectPanelsExist;

  const handleTriggerGeneratePanels = () => {
    createPanels({ id })
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

  return { disabled, projectPanelsExist, handleTriggerGeneratePanels };
}
