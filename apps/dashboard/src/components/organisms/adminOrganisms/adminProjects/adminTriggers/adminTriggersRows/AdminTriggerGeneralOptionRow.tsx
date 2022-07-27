import { useState, useEffect } from "react";
import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { useProject, useRole, useProjectPrices } from "hooks";
import { useParams } from "react-router-dom";
import { formatNumber } from "utils";
import { ProjectIDParams } from "solarx-types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { moderatorArray } from "constant";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import Styles from "../AdminTriggers.styled";

interface AdminTriggerRowProps {
  scrolled?: boolean;
}

export default function AdminTriggerGeneralOptionRow({
  scrolled,
}: AdminTriggerRowProps) {
  const role = useRole();
  const functions = useFunctions();
  const updateGeneralOptionQuantity = httpsCallable<{ id?: string }, boolean>(
    functions,
    "updateGeneralPriceQuantity_v0"
  );
  const { id = "" } = useParams<ProjectIDParams>();
  const { data: project } = useProject(id);
  const { data: prices, status: pricesStatus } = useProjectPrices(id);
  const [newQuantity, setNewQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  useEffect(() => {
    const aux = prices.reduce((prev, curr) => {
      if (curr?.basePrice === curr?.unit_amount) return prev;
      return prev + (curr?.quantity || 0);
    }, 0);

    setNewQuantity((project?.totalPanels || 0) - aux);
    setDisabled(prices[prices.length - 1]?.quantity === newQuantity);
  }, [newQuantity, prices, pricesStatus, project]);

  const handleUpdateGeneralOptionQuantity = () => {
    updateGeneralOptionQuantity({ id })
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

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">
            {t("forms.projectForm.generalOption")}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {t("forms.projectForm.generalOptionDescription")}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">
        {formatNumber(prices[prices.length - 1]?.quantity || 0)}
      </TableCell>
      <TableCell align="right">
        {disabled ? "-" : formatNumber(newQuantity)}
      </TableCell>
      <Styles.TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={!moderatorArray.has(role) || disabled}
          onClick={() => {
            handleUpdateGeneralOptionQuantity();
          }}
        >
          {t("forms.projectForm.updateGeneralOption")}
        </Button>
      </Styles.TableCellLast>
    </TableRow>
  );
}
