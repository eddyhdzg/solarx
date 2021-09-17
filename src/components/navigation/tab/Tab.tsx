import { Tab as MuiTab, TabProps } from "@material-ui/core";
import useTabStyles from "./tab.jss";

const Tab: React.FC<TabProps> = (props) => {
  const tabItemStyles = useTabStyles();
  return <MuiTab classes={tabItemStyles} {...props} />;
};

export default Tab;
