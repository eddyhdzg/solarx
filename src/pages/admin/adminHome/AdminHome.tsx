import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Seo, GridItem, PageTitle, SectionButton } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";

export default function AdminHome() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.admin.adminHome.admin", {
          postProcess: "capitalize",
        })}
        description={t("pages.admin.adminHome.adminDescription")}
      />
      <PageTitle>
        {t("pages.admin.adminHome.admin", {
          postProcess: "capitalize",
        })}
      </PageTitle>
      <Grid container spacing={3}>
        <GridItem xxs={12} xs={6} sm={4} md={3} xl={2}>
          <SectionButton
            title={t("pages.admin.adminHome.projects")}
            to="/admin/projects"
            emoji="💼"
          />
        </GridItem>
        <GridItem xxs={12} xs={6} sm={4} md={3} xl={2}>
          <SectionButton
            title={t("pages.admin.adminHome.users")}
            to="/admin/users"
            emoji="👥"
          />
        </GridItem>
      </Grid>
    </>
  );
}
