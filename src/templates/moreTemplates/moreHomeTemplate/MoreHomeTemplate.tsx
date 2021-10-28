import { Grid } from "@mui/material";
import { useEffect } from "react";
import { GridItem, SectionButton } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function MoreHomeTemplate() {
  const { onChangeRoute } = useHeader();
  const { t } = useTranslation();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
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
  );
}
