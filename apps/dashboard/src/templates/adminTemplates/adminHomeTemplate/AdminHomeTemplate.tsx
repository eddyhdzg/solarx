import { Grid } from "@mui/material";
import { GridItem, SectionButton } from "components";
import { useTranslation } from "react-i18next";

export default function AdminHomeTemplate() {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <GridItem xs={6} sm={4} md={3}>
        <SectionButton
          title={t("pages.admin.adminHome.projects", {
            postProcess: "capitalize",
          })}
          to="/admin/projects"
          emoji="💼"
        />
      </GridItem>
      <GridItem xs={6} sm={4} md={3}>
        <SectionButton
          title={t("pages.admin.adminHome.users", {
            postProcess: "capitalize",
          })}
          to="/admin/users"
          emoji="👥"
        />
      </GridItem>
      {process.env.REACT_APP_ENV === "local" && (
        <GridItem xs={6} sm={4} md={3}>
          <SectionButton
            title={t("pages.admin.adminHome.local", {
              postProcess: "capitalize",
            })}
            to="/admin/local"
            emoji="📟"
          />
        </GridItem>
      )}
    </Grid>
  );
}
