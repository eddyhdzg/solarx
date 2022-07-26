import { GridItem, PageTitle } from "atomic";
import { Box, Container, Grid } from "@mui/material";
import { LocalTriggers } from "organisms";
import { useTranslation } from "react-i18next";

export default function AdminLocalTemplate() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.admin.local.local")}</PageTitle>
      <Box
        sx={{
          maxWidth: "960px",
        }}
      >
        <Grid container direction="row" spacing={4}>
          <GridItem>
            <LocalTriggers />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
