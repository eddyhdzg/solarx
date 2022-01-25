import { GridItem, PageTitle } from "components";
import { Grid } from "@mui/material";
import { LocalTriggers } from "organisms";
import { useTranslation } from "react-i18next";
import { StyledRoot } from "./AdminLocalTemplate.styled";

export default function AdminLocalTemplate() {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>
        {t("pages.admin.local.local", {
          postProcess: "capitalize",
        })}
      </PageTitle>
      <StyledRoot>
        <Grid container direction="row" spacing={4}>
          <GridItem xs={12}>
            <LocalTriggers />
          </GridItem>
        </Grid>
      </StyledRoot>
    </>
  );
}
