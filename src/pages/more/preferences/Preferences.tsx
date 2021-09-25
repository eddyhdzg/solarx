import { useEffect } from "react";
import { Seo, GridItem, PageTitle } from "components";
import { useHeader } from "hooks";
import LocaleSection from "./subComponents/localeSection/LocaleSection";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

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
    <Box
      sx={{
        maxWidth: (theme) => theme.spacing(100),
      }}
    >
      <Grid container direction="row" spacing={4}>
        <GridItem xs={12}>
          <LocaleSection />
        </GridItem>
      </Grid>
    </Box>
  );
}
