import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Seo, GridItem, PageTitle, SectionButton } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function MoreHome() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.more.moreHome.more")}
        description={t("pages.more.moreHome.moreDescription")}
      />
      <PageTitle>{t("pages.more.moreHome.more")}</PageTitle>
      <Grid container spacing={3}>
        <GridItem xxs={12} xs={6} sm={4} md={3} xl={2}>
          <SectionButton
            title={t("pages.more.profile.profile")}
            to="/more/profile"
            emoji="👤"
          />
        </GridItem>
        <GridItem xxs={12} xs={6} sm={4} md={3} xl={2}>
          <SectionButton
            title={t("pages.more.preferences.preferences")}
            to="/more/preferences"
            emoji="🎛"
          />
        </GridItem>
      </Grid>
    </>
  );
}
