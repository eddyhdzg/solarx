import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { useRole, useHandleTriggerGoal, useProject } from "hooks";
import { useParams } from "react-router-dom";
import { formatMoney } from "utils";
import { moderatorArray } from "constant";
import { useTranslation } from "react-i18next";
import { ProjectIDParams } from "solarx-types";
import { TableCellLast } from "../../ProjectForms.styled";

interface TriggerGoalProps {
  scrolled: boolean;
}

export default function TriggerGoal({ scrolled }: TriggerGoalProps) {
  const role = useRole();
  const { t } = useTranslation();
  const { id = "" } = useParams<ProjectIDParams>();
  const { data: project } = useProject(id);
  const { disabled, handleTriggerGoal, newGoal } = useHandleTriggerGoal();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">
            {t("forms.projectForm.goal")}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {t("forms.projectForm.goalDescription")}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">{formatMoney(project?.goal)}</TableCell>
      <TableCell align="right">
        {disabled ? "-" : formatMoney(newGoal)}
      </TableCell>
      <TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={!moderatorArray.has(role) || disabled}
          onClick={handleTriggerGoal}
        >
          {t("forms.projectForm.updateGoal")}
        </Button>
      </TableCellLast>
    </TableRow>
  );
}
