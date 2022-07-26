import { Typography, Button, TableCell, TableRow } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useHandleTriggerGeneratePanels } from "hooks";
import { useTranslation } from "react-i18next";
import { TableCellLast } from "../../ProjectForms.styled";

interface TriggerGeneratePanelsProps {
  scrolled: boolean;
}

export default function TriggerGeneratePanels({
  scrolled,
}: TriggerGeneratePanelsProps) {
  const { t } = useTranslation();
  const { disabled, handleTriggerGeneratePanels, projectPanelsExist } =
    useHandleTriggerGeneratePanels();

  return (
    <TableRow
      sx={{
        "& td, & th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">
            {t("forms.projectForm.generatePanels")}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {t("forms.projectForm.generatePanelsDescription")}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">
        {projectPanelsExist ? <DoneIcon /> : "-"}
      </TableCell>
      <TableCell align="right">
        {!projectPanelsExist ? <DoneIcon /> : "-"}
      </TableCell>
      <TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={disabled}
          onClick={handleTriggerGeneratePanels}
        >
          {t("forms.projectForm.generatePanels")}
        </Button>
      </TableCellLast>
    </TableRow>
  );
}
