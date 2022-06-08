import { Box, Container } from "@mui/material";
import { HistoryList } from "organisms";
import { useTranslation } from "react-i18next";
import { PageTitle } from "components";

export default function HistoryTemplate() {
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="xl">
        <PageTitle>{t("pages.more.history.history")}</PageTitle>
      </Container>
      <Box
        sx={{
          maxWidth: {
            md: 800,
          },
        }}
      >
        <HistoryList />
      </Box>
    </>
  );
}
