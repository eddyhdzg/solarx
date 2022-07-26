import { useState, useEffect } from "react";
import { useProject, useProjectPrices } from "hooks";
import { useParams } from "react-router-dom";
import { calcGoal } from "utils";
import { ProjectIDParams } from "solarx-types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

export default function useHandleTriggerGoal() {
  const { t } = useTranslation();
  const functions = useFunctions();
  const updateProjectGoal = httpsCallable<{ id?: string }, boolean>(
    functions,
    "updateProjectGoal_v0"
  );
  const { id = "" } = useParams<ProjectIDParams>();
  const { data: project, status: projectStatus } = useProject(id);
  const { data: prices, status: pricesStatus } = useProjectPrices(id);
  const [newGoal, setNewGoal] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const disabled =
    project?.goal === newGoal || project?.totalPanels !== newQuantity;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const auxGoal = prices.reduce((prev, curr) => {
      return prev + calcGoal(curr?.unit_amount, curr?.quantity);
    }, 0);

    const auxQuantity = prices.reduce((prev, curr) => {
      return prev + (curr?.quantity || 0);
    }, 0);

    setNewGoal(auxGoal);
    setNewQuantity(auxQuantity);
  }, [prices, pricesStatus, project, projectStatus]);

  const handleTriggerGoal = () => {
    updateProjectGoal({ id })
      .then(() => {
        enqueueSnackbar(t("snackbar.projectGoalEdited"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectGoalNotEdited"), {
          variant: "error",
        });
      });
  };

  return { disabled, handleTriggerGoal, newGoal };
}
