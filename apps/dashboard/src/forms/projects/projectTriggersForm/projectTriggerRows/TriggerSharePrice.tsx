import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { useRole } from "hooks";
import { moderatorArray } from "constant";
import { useTranslation } from "react-i18next";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Styles from "../AdminTriggers.styled";

interface TriggerSharePriceProps {
  scrolled: boolean;
}

export default function TriggerSharePrice({
  scrolled,
}: TriggerSharePriceProps) {
  const { t } = useTranslation();
  const role = useRole();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">
            {t("forms.projectForm.sharePrice")}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {t("forms.projectForm.sharePriceDescription")}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">
        {disabled ? <DoneIcon /> : <CloseIcon />}
      </TableCell>
      <TableCell align="right">{!disabled ? <DoneIcon /> : "-"}</TableCell>
      <Styles.TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={!moderatorArray.has(role) || disabled}
          onClick={() => {
            handleUpdatePricesSharePrice();
          }}
        >
          {t("forms.projectForm.updateSharePrices")}
        </Button>
      </Styles.TableCellLast>
    </TableRow>
  );
}
