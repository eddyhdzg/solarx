import { GridItem, PageTitle } from "atomic";
import { Container, Grid } from "@mui/material";
import { LocalTriggers } from "organisms";
import { useTranslation } from "react-i18next";
import { StyledRoot } from "./AdminLocalTemplate.styled";

export default function AdminLocalTemplate() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.admin.local.local")}</PageTitle>
      <StyledRoot>
        <Grid container direction="row" spacing={4}>
          <GridItem xs={12}>
            <LocalTriggers />
          </GridItem>
        </Grid>
      </StyledRoot>
    </Container>
  );
}
