import { styled, Paper } from "@mui/material";
import { TabPanel } from "@mui/lab";

export const WalletActionsRoot = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const StyledTabPanel = styled(TabPanel)({
  padding: 0,
});
