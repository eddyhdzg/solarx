import ThemeSection from "./subComponents/ThemeSection";
import useStyles from "./preferences.jss";
import { GridItem } from "components";
import { Grid } from "@material-ui/core";

export default function Preferences() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={4}>
        <GridItem item xs={12}>
          <ThemeSection />
        </GridItem>
      </Grid>
    </div>
  );
}
