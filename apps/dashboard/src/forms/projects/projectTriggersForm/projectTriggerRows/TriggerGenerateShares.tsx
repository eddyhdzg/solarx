import { Typography, Button, TableCell, TableRow } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useHandleTriggerGenerateShares } from "hooks";
import { useTranslation } from "react-i18next";
import { TableCellLast } from "../../ProjectForms.styled";

interface TriggerGenerateSharesProps {
  scrolled: boolean;
}

export default function TriggerGenerateShares({
  scrolled,
}: TriggerGenerateSharesProps) {
  const { t } = useTranslation();
  const { disabled, handleTriggerGenerateShares, projectSharesExist } =
    useHandleTriggerGenerateShares();

  return (
    <TableRow
      sx={{
        "& td, & th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">
            {t("forms.projectForm.generateShares")}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {t("forms.projectForm.generateSharesDescription")}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">
        {projectSharesExist ? <DoneIcon /> : "-"}
      </TableCell>
      <TableCell align="right">
        {!projectSharesExist ? <DoneIcon /> : "-"}
      </TableCell>
      <TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={disabled}
          onClick={handleTriggerGenerateShares}
        >
          {t("forms.projectForm.generateShares")}
        </Button>
      </TableCellLast>
    </TableRow>
  );
}
