import { Typography } from "@material-ui/core";
import useStyles from "./pageTitle.jss";

const PageTitle: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography component="h1" variant="h3" className={classes.root}>
      {children}
    </Typography>
  );
};

export default PageTitle;
