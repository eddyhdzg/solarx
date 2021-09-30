import { useEffect } from "react";
import { Seo, GridItem, PageTitle } from "components";
import { useHeader } from "hooks";
import LocaleSection from "./subComponents/localeSection/LocaleSection";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { StyledRoot } from "./Preferences.styled";

export default function PreferencesPage() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: t("router.more"), url: "/more" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.more.preferences.preferences")}
        description={t("pages.more.preferences.preferencesDescription")}
      />
      <PageTitle>{t("pages.more.preferences.preferences")}</PageTitle>
      <Preferences />
    </>
  );
}

function Preferences() {
  return (
    <StyledRoot>
      <Grid container direction="row" spacing={4}>
        <GridItem xs={12}>
          <LocaleSection />
        </GridItem>
      </Grid>
    </StyledRoot>
  );
}
