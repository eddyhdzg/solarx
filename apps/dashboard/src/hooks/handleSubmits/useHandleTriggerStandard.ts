import { useState, useEffect } from "react";
import {
  useProject,
  useProjectPrices,
  useTriggerStandardPriceShares,
} from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "solarx-types";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

export default function useHandleTriggerStandard() {
  const { t } = useTranslation();
  const triggerStandardPriceShares = useTriggerStandardPriceShares();
  const { id = "" } = useParams<ProjectIDParams>();
  const { data: project } = useProject(id);
  const { data: prices, status: pricesStatus } = useProjectPrices(id);
  const [newQuantity, setNewQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const aux = prices.reduce((prev, curr) => {
      if (curr?.basePrice === curr?.unit_amount) return prev;
      return prev + (curr?.quantity || 0);
    }, 0);

    setNewQuantity((project?.totalShares || 0) - aux);
    setDisabled(prices[prices.length - 1]?.quantity === newQuantity);
  }, [newQuantity, prices, pricesStatus, project]);

  const handleTriggerGeneral = () => {
    triggerStandardPriceShares({ id })
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

  return {
    disabled,
    handleTriggerGeneral,
    newQuantity,
    prices,
  };
}
