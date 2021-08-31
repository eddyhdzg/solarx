import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Seo, GridItem, PageTitle, SectionButton } from "components";
import { useHeader } from "hooks";

export default function MoreHome() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo title="More" description="More section." />
      <PageTitle>More</PageTitle>
      <Grid container spacing={3}>
        <GridItem xxs={12} xs={6} sm={4} md={3} xl={2}>
          <SectionButton title="Preferences" to="/more/preferences" emoji="🎛" />
        </GridItem>
        <GridItem xxs={12} xs={6} sm={4} md={3} xl={2}>
          <SectionButton
            title="Account Information"
            to="/more/account-information"
            emoji="⚙️"
          />
        </GridItem>
      </Grid>
    </>
  );
}
