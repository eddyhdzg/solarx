import { useState, useEffect } from "react";
import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { useProject, useProjectBuyingOptions, useRole } from "hooks";
import { useParams } from "react-router-dom";
import { formatMoney, calcGoal } from "utils";
import { ProjectIDParams } from "types";
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
  const updateProjectGoalBuyingOptions = httpsCallable<
    { id?: string },
    boolean
  >(functions, "updateProjectGoalBuyingOptions");
  const { id } = useParams<ProjectIDParams>();
  const { data: project, status: projectStatus } = useProject(id || "");
  const { data: buyingOptions, status: buyingOptionsStatus } =
    useProjectBuyingOptions(id || "");
  const [newGoal, setNewGoal] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const disabled =
    project?.goal === newGoal || project?.totalShares !== newQuantity;
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  useEffect(() => {
    const auxGoal = buyingOptions.reduce((prev, curr) => {
      return (
        prev + calcGoal(project?.sharePrice, curr?.discount, curr?.quantity)
      );
    }, 0);

    const auxQuantity = buyingOptions.reduce((prev, curr) => {
      return prev + (curr?.quantity || 0);
    }, 0);

    setNewGoal(auxGoal);
    setNewQuantity(auxQuantity);
  }, [buyingOptions, buyingOptionsStatus, project, projectStatus]);

  const handleUpdateProjectGoal = () => {
    updateProjectGoalBuyingOptions({ id })
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
          <Typography variant="subtitle1">Goal</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Recalculate goal depending on the new buying options.
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">{formatMoney(project?.goal || 0)}</TableCell>
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
          Trigger Goal
        </Button>
      </Styles.TableCellLast>
    </TableRow>
  );
}
