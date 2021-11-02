import { useState, useEffect } from "react";
import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { useProject, useProjectBuyingOptions, useRole } from "hooks";
import { useParams } from "react-router-dom";
import { formatNumber } from "utils";
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

export default function AdminTriggerGeneralOptionRow({
  scrolled,
}: AdminTriggerRowProps) {
  const role = useRole();
  const functions = useFunctions();
  const updateGeneralOptionQuantity = httpsCallable<{ id?: string }, boolean>(
    functions,
    "updateGeneralOptionQuantity"
  );
  const { id } = useParams<ProjectIDParams>();
  const { data: project } = useProject(id || "");
  const { data: buyingOptions, status: buyingOptionsStatus } =
    useProjectBuyingOptions(id || "");
  const [newQuantity, setNewQuantity] = useState(0);
  const disabled =
    buyingOptions[buyingOptions.length - 1]?.quantity === newQuantity;
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  useEffect(() => {
    const aux = buyingOptions.reduce((prev, curr) => {
      if (curr?.discount === 0) return prev;
      return prev + (curr?.quantity || 0);
    }, 0);

    setNewQuantity((project?.totalShares || 0) - aux);
  }, [buyingOptions, buyingOptionsStatus, project]);

  const handleUpdateGeneralOptionQuantity = () => {
    updateGeneralOptionQuantity({ id })
      .then(() => {
        enqueueSnackbar(t("snackbar.buyingOptionEdited"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.buyingOptionNotEdited"), {
          variant: "error",
        });
      });
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">General Option</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Recalculate general option quantity depending on new buying options.
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">
        {formatNumber(buyingOptions[buyingOptions.length - 1]?.quantity || 0)}
      </TableCell>
      <TableCell align="right">
        {disabled ? "-" : formatNumber(newQuantity)}
      </TableCell>
      <Styles.TableCellLast scrolled={Boolean(scrolled)} align="right">
        <Button
          size="large"
          variant="contained"
          disabled={!moderatorArray.has(role) || disabled}
          onClick={() => {
            handleUpdateGeneralOptionQuantity();
          }}
        >
          Trigger General Option
        </Button>
      </Styles.TableCellLast>
    </TableRow>
  );
}
