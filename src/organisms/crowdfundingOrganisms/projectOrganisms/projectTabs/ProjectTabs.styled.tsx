import { styled } from "@mui/material";
import { TabPanel } from "@mui/lab";

export const ProjectTabsContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(3),
}));

export const StyledTabPanel = styled(TabPanel)({
  padding: 0,
});
