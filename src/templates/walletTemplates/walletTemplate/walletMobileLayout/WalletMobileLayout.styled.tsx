import { styled } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import { TabPanel } from "@mui/lab";

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
}));

export const StyledTabPanel = styled(TabPanel)({
  padding: 0,
});
