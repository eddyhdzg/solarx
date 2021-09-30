import { styled } from "@mui/material";
import { TabPanel } from "@mui/lab";

export const ProjectFormTabsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
}));

export const ProjectFormTabPanel = styled(TabPanel)({
  padding: 0,
});
