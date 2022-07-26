import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { useRole, useHandleTriggerStandard } from "hooks";
import { formatNumber } from "utils";
import { moderatorArray } from "constant";
import { useTranslation } from "react-i18next";
import { TableCellLast } from "../../ProjectForms.styled";

interface TriggerStandardPanelsQuantityProps {
  scrolled: boolean;
}

export default function TriggerStandardPanelsQuantity({
  scrolled,
}: TriggerStandardPanelsQuantityProps) {
  const { t } = useTranslation();
  const role = useRole();
  const { disabled, handleTriggerGeneral, newQuantity, prices } =
    useHandleTriggerStandard();

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
      <TableCellLast scrolled={scrolled} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={!moderatorArray.has(role) || disabled}
          onClick={handleTriggerGeneral}
        >
          {t("forms.projectForm.updateGeneralOption")}
        </Button>
      </TableCellLast>
    </TableRow>
  );
}
