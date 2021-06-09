import { LinearProgress } from "@material-ui/core";
import { GridOverlay } from "@material-ui/data-grid";
import useStyles from "./customLoading.jss";

export default function CustomLoading() {
  const classes = useStyles();
  return (
    <GridOverlay>
      <div className={classes.customLoading_root}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}
