import { useState, useEffect } from "react";
import { useProject, useProjectPrices } from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "solarx-types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

export default function useHandleTriggerPanelPrice() {
  const { t } = useTranslation();
  const { id = "" } = useParams<ProjectIDParams>();
  const functions = useFunctions();
  const updatePricesPanelPrice = httpsCallable<{ id?: string }, boolean>(
    functions,
    "updatePricesPanelPrice_v0"
  );
  const {
    data: { basePrice },
    status: projectStatus,
  } = useProject(id);
  const { data: prices, status: pricesStatus } = useProjectPrices(id);
  const { enqueueSnackbar } = useSnackbar();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const unsync = prices.some((value) => value?.basePrice !== basePrice);
    setDisabled(!unsync);
  }, [prices, projectStatus, pricesStatus, basePrice]);

  const handleTriggerPanelPrice = () => {
    updatePricesPanelPrice({ id })
      .then(() => {
        enqueueSnackbar(t("snackbar.panelsPricesUpdated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.panelsPricesNotUpdated"), {
          variant: "error",
        });
      });
  };

  return {
    disabled,
    handleTriggerPanelPrice,
  };
}
