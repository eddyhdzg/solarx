import { Tabs as MuiTabs, TabsProps } from "@material-ui/core";
import useTabsStyles from "./tabs.jss";

const Tabs = (props: TabsProps) => {
  const classes = useTabsStyles();
  return <MuiTabs classes={classes} {...props} />;
};

export default Tabs;
