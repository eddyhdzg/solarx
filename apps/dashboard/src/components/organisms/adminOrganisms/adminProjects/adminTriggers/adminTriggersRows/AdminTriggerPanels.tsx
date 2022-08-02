import { Typography, Button, TableCell } from "@mui/material";
import { useRole, useProjectPanelsExist } from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "solarx-types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import DoneIcon from "@mui/icons-material/Done";
import Styles from "../AdminTriggers.styled";

interface AdminTriggerRowProps {
  scrolled?: boolean;
}

export default function AdminTriggerPanelsRow({
  scrolled,
}: AdminTriggerRowProps) {
  const role = useRole();
  const functions = useFunctions();
  const createPanels = httpsCallable<{ id?: string }, boolean>(
    functions,
    "createPanels_v0"
  );
  const { id } = useParams<ProjectIDParams>();
  const projectPanelsExist = useProjectPanelsExist(id);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const disabled = role !== "SUPER_USER" || projectPanelsExist;

  const handleCreatePanels = () => {
    createPanels({ id })
      .then(() => {
        enqueueSnackbar(t("snackbar.panelsCreated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.panelsNotCreated"), {
          variant: "error",
        });
      });
  };

  return (
    <Styles.LastRow>
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
      <Styles.TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={disabled}
          onClick={() => {
            handleCreatePanels();
          }}
        >
          {t("forms.projectForm.generatePanels")}
        </Button>
      </Styles.TableCellLast>
    </Styles.LastRow>
  );
}