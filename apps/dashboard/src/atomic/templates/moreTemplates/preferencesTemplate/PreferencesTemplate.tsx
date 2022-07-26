import { GridItem, PageTitle } from "atomic";
import { Box, Container, Grid } from "@mui/material";
import { LocaleSection } from "organisms";
import { useTranslation } from "react-i18next";

export default function PreferencesTemplate() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.more.preferences.preferences")}</PageTitle>
      <Box
        sx={{
          maxWidth: "800px",
        }}
      >
        <Grid container direction="row" spacing={4}>
          <GridItem>
            <LocaleSection />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
