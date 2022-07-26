import { Tab, styled } from "@mui/material";
import { TabPanel } from "@mui/lab";

export const StyledTab = styled(Tab)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
}));

export const StyledTabPanel = styled(TabPanel)({
  padding: 0,
});
