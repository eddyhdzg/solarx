import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    fontSize: "14px",
    color: "inherit",
  },
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  root__yellow: {
    color: "#fad452",
    backgroundColor: "#fad45215",
  },
  root__blue: {
    color: "#80B0ff",
    backgroundColor: "#80B0ff15",
  },
  root__green: {
    color: "#7de8be",
    backgroundColor: "#7de8be15",
  },
}));

export default useStyles;
