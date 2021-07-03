import ThemeSection from "./subComponents/themeSection/ThemeSection";
import LocaleSection from "./subComponents/localeSection/LocaleSection";
import useStyles from "./preferences.jss";
import { GridItem } from "components";
import { Grid } from "@material-ui/core";

export default function Preferences() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={4}>
        <GridItem xs={12}>
          <ThemeSection />
        </GridItem>
        <GridItem xs={12}>
          <LocaleSection />
        </GridItem>
      </Grid>
    </div>
  );
}
