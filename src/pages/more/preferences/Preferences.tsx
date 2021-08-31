import { useEffect } from "react";
import { Seo, GridItem, PageTitle } from "components";
import { useHeader } from "hooks";
import LocaleSection from "./subComponents/localeSection/LocaleSection";
import useStyles from "./preferences.jss";
import { Grid } from "@material-ui/core";

export default function PreferencesPage() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: "more", url: "/more" });
  }, [onChangeRoute]);

  return (
    <>
      <Seo title="Preferences" description="User's preferences." />
      <PageTitle>Preferences</PageTitle>
      <Preferences />
    </>
  );
}

function Preferences() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={4}>
        <GridItem xs={12}>
          <LocaleSection />
        </GridItem>
      </Grid>
    </div>
  );
}
