import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { moderatorArray } from "constant";
import { useTranslation } from "react-i18next";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useRole, useHandleTriggerPanelPrice } from "hooks";
import { TableCellLast } from "../../ProjectForms.styled";

interface TriggerPanelPriceProps {
  scrolled: boolean;
}

export default function TriggerPanelPrice({
  scrolled,
}: TriggerPanelPriceProps) {
  const { t } = useTranslation();
  const role = useRole();
  const { disabled, handleTriggerPanelPrice } = useHandleTriggerPanelPrice();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">
            {t("forms.projectForm.panelPrice")}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {t("forms.projectForm.panelPriceDescription")}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">
        {disabled ? <DoneIcon /> : <CloseIcon />}
      </TableCell>
      <TableCell align="right">{!disabled ? <DoneIcon /> : "-"}</TableCell>
      <TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={!moderatorArray.has(role) || disabled}
          onClick={handleTriggerPanelPrice}
        >
          {t("forms.projectForm.updatePanelPrices")}
        </Button>
      </TableCellLast>
    </TableRow>
  );
}
