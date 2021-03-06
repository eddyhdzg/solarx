import { Grid, Container } from "@mui/material";
import { useEffect } from "react";
import { GridItem, SectionButton, PageTitle } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function MoreHomeTemplate() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <Container maxWidth="xl" disableGutters>
      <PageTitle>{t("pages.more.moreHome.more")}</PageTitle>
      <Grid container spacing={3}>
        <GridItem xs={6} sm={4} md={3}>
          <SectionButton
            title={t("pages.more.profile.profile")}
            to="/more/profile"
            emoji="👤"
          />
        </GridItem>
        <GridItem xs={6} sm={4} md={3}>
          <SectionButton
            title={t("pages.more.preferences.preferences")}
            to="/more/preferences"
            emoji="🎛"
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
