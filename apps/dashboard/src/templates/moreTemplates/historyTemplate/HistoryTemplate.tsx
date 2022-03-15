import { Box, Container } from "@mui/material";
import { HistoryList } from "organisms";
import { useTranslation } from "react-i18next";
import { PageTitle, ContentPadding } from "components";

export default function HistoryTemplate() {
  const { t } = useTranslation();
  return (
    <Container disableGutters maxWidth="xl">
      <ContentPadding
        sx={{
          pb: 0,
        }}
      >
        <PageTitle>{t("pages.more.history.history")}</PageTitle>
      </ContentPadding>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <HistoryList />
      </Box>
    </Container>
  );
}
