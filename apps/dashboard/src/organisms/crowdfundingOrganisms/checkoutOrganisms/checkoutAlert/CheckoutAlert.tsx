import { useState, useEffect } from "react";
import {
  // Button,
  Dialog,
  // DialogActions,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CloseIconButton, Content, CheckIcon } from "./CheckoutAlert.styled";
import { useCrowdfundingStore } from "hooks";
import shallow from "zustand/shallow";

export default function CheckoutAlert() {
  const {
    alert: { open, status },
    dispatch,
  } = useCrowdfundingStore(
    ({ alert, dispatch }) => ({ alert, dispatch }),
    shallow
  );

  const handleClose = () => {
    dispatch({ type: "ALERT_TOGGLE_OPEN", payload: false });
  };

  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (status) {
      case "succeeded":
        setTitle("Payment successful!");
        break;
      case "canceled":
        setTitle("Canceled");
        break;
      case "processing":
        setTitle("Processing");
        break;
      case "requires_action":
        setTitle("Requires Action");
        break;
      case "requires_capture":
        setTitle("Requires Capture");
        break;
      case "requires_confirmation":
        setTitle("Requires Confirmation");
        break;
      case "requires_payment_method":
        setTitle("Requires Payment Method");
        break;
      default:
        setTitle("Error");
        break;
    }
  }, [status]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      // maxWidth="xs"
    >
      <CloseIconButton aria-label="close" onClick={handleClose}>
        <CloseIcon />
      </CloseIconButton>
      <Content>
        <CheckIcon />
        <Typography variant="h5" gutterBottom>
          {title}!
        </Typography>
      </Content>
      {/* <DialogActions>
        <Button onClick={handleClose} color="secondary" size="large">
          Close
        </Button>
        <Button onClick={handleClose} color="inherit" size="large">
          View Details
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}
