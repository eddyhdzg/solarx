import { useState, useEffect } from "react";
import { Typography, Button, TableCell, TableRow } from "@mui/material";
import { useProject, useRole, useProjectPrices } from "hooks";
import { useParams } from "react-router-dom";
import { ProjectIDParams } from "types";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { moderatorArray } from "constant";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Styles from "../AdminTriggers.styled";

interface AdminTriggerRowProps {
  scrolled?: boolean;
}

export default function AdminTriggerSharePrice({
  scrolled,
}: AdminTriggerRowProps) {
  const role = useRole();
  const functions = useFunctions();
  const updatePricesSharePrice = httpsCallable<{ id?: string }, boolean>(
    functions,
    "updatePricesSharePrice_v0"
  );

  const { id } = useParams<ProjectIDParams>();
  const {
    data: { sharePrice },
    status: projectStatus,
  } = useProject(id || "");
  const { data: prices, status: pricesStatus } = useProjectPrices(id || "");
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const unsync = prices.some((value) => value?.sharePrice !== sharePrice);
    setDisabled(!unsync);
  }, [prices, projectStatus, pricesStatus, sharePrice]);

  const handleUpdatePricesSharePrice = () => {
    updatePricesSharePrice({ id })
      .then(() => {
        enqueueSnackbar(t("snackbar.sharePricesUpdated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.sharePricesNotUpdated"), {
          variant: "error",
        });
      });
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div>
          <Typography variant="subtitle1">Share Price</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Update sharePrice in all prices if they are unsync.
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
          Update Share Prices
        </Button>
      </Styles.TableCellLast>
    </TableRow>
  );
}
