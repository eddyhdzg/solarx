import { useState, useEffect } from "react";
import { useProject, useProjectPrices } from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "solarx-types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

export default function useHandleTriggerSharePrice() {
  const { t } = useTranslation();
  const functions = useFunctions();
  const updatePricesSharePrice = httpsCallable<{ id?: string }, boolean>(
    functions,
    "updatePricesSharePrice_v0"
  );

  const { id = "" } = useParams<ProjectIDParams>();
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

  const handleTriggerSharePrice = () => {
    updatePricesSharePrice({ id })
      .then(() => {
        enqueueSnackbar(t("snackbar.sharePricesUpdated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.sharePricesNotUpdated"), {
          variant: "error",
        });
      });
  };

  return {
    disabled,
    handleTriggerSharePrice,
  };
}
