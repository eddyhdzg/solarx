import { useState, useEffect } from "react";
import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { useProject, useRole, useProjectPrices } from "hooks";
import { useParams } from "react-router-dom";
import { formatMoney, calcGoal } from "utils";
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

export default function AdminTriggerGoalRow({
  scrolled,
}: AdminTriggerRowProps) {
  const role = useRole();
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
  const { t } = useTranslation();

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

  const handleUpdateProjectGoal = () => {
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

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">{t("projects.goal")}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {t("forms.projectForm.goalDescription")}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">{formatMoney(project?.goal)}</TableCell>
      <TableCell align="right">
        {disabled ? "-" : formatMoney(newGoal)}
      </TableCell>
      <Styles.TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={!moderatorArray.has(role) || disabled}
          onClick={() => {
            handleUpdateProjectGoal();
          }}
        >
          {t("forms.projectForm.updateGoal")}
        </Button>
      </Styles.TableCellLast>
    </TableRow>
  );
}
