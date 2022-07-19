import { useState } from "react";
import { Box, Button, Modal, IconButton, Typography } from "@mui/material";
import { Counter } from "atomic";
import {
  useRouterState,
  useProject,
  useProjectPrice,
  useQueryParams,
} from "hooks";
import { ProjectIDParams } from "solarx-types";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

interface CheckoutProductModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CheckoutProductModal({
  open,
  handleClose,
}: CheckoutProductModalProps) {
  const { t } = useTranslation();
  const {
    values: { qty = "0" },
    setValue,
  } = useRouterState();
  const [shares, setShares] = useState(Number(qty));
  const { pid = "" } = useQueryParams();
  const { id } = useParams<ProjectIDParams>();
  const { data: project } = useProject(id);
  const { data: price } = useProjectPrice(id, pid);
  const { name } = project;
  const { quantity = 0, sharesSold = 0 } = price;
  const rest = quantity - sharesSold;
  const max = Math.min(rest, 500);
  const error = shares < 1 || shares > max;

  const handleChangeShares = (num: number) => {
    setShares(shares + num);
  };

  const handleSetRouterQty = () => {
    setValue("qty", shares);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: 360,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            p: 3,
          }}
        >
          <div>
            <Typography variant="subtitle1">
              {t("pages.crowdfunding.checkout.updateQuantity")}
            </Typography>
            <Typography variant="body3" color="textSecondary">
              {name}
            </Typography>
          </div>
          <IconButton
            aria-label="close"
            size="large"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Counter
              shares={shares}
              onChangeShares={handleChangeShares}
              setShares={setShares}
              error={error}
              max={max}
            />
          </Box>
          <Button
            variant="contained"
            disabled={shares === Number(qty)}
            onClick={handleSetRouterQty}
            fullWidth
          >
            {t("pages.crowdfunding.checkout.update")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
