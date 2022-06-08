import { GridItem, PageTitle } from "components";
import { Box, Container, Grid } from "@mui/material";
import { LocaleSection } from "organisms";
import { useTranslation } from "react-i18next";

export default function PreferencesTemplate() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <PageTitle>{t("pages.more.preferences.preferences")}</PageTitle>
      <Box
        sx={{
          maxWidth: "800px",
        }}
      >
        <Grid container direction="row" spacing={4}>
          <GridItem xs={12}>
            <LocaleSection />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
