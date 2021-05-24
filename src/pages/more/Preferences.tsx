import { Grid } from "@material-ui/core";
import ThemeSection from "./subComponents/ThemeSection";
import useStyles from "./preferences.jss";

export default function Preferences() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item xs={12}>
          <ThemeSection />
        </Grid>
      </Grid>
    </div>
  );
}
