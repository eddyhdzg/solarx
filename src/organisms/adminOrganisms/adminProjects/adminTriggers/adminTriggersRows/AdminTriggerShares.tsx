import { Typography, Button, TableCell } from "@mui/material";
import { useRole, useProjectSharesExist } from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import DoneIcon from "@mui/icons-material/Done";
import Styles from "../AdminTriggers.styled";

interface AdminTriggerRowProps {
  scrolled?: boolean;
}

export default function AdminTriggerSharesRow({
  scrolled,
}: AdminTriggerRowProps) {
  const role = useRole();
  const functions = useFunctions();
  const createShares = httpsCallable<{ id?: string }, boolean>(
    functions,
    "createShares_v0"
  );
  const { id } = useParams<ProjectIDParams>();
  const projectSharesExist = useProjectSharesExist(id);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const disabled = role !== "SUPER_USER" || projectSharesExist;

  const handleCreateShares = () => {
    createShares({ id })
      .then(() => {
        enqueueSnackbar(t("snackbar.sharesCreated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.sharesNotCreated"), {
          variant: "error",
        });
      });
  };

  return (
    <Styles.LastRow>
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
      <Styles.TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={disabled}
          onClick={() => {
            handleCreateShares();
          }}
        >
          {t("forms.projectForm.generateShares")}
        </Button>
      </Styles.TableCellLast>
    </Styles.LastRow>
  );
}
