import { styled } from "@mui/material";
import { TabPanel } from "@mui/lab";

export const EditProjectTabsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
}));

export const EditProjectTabPanel = styled(TabPanel)({
  padding: 0,
});
