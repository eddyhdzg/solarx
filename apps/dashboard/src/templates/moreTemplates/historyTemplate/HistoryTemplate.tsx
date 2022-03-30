import { Box, Container } from "@mui/material";
import { HistoryList } from "organisms";
import { useTranslation } from "react-i18next";
import { PageTitle, ContentContainer } from "components";

export default function HistoryTemplate() {
  const { t } = useTranslation();
  return (
    <Container disableGutters maxWidth="xl">
      <ContentContainer>
        <PageTitle>{t("pages.more.history.history")}</PageTitle>
      </ContentContainer>
      <Box
        sx={{
          maxWidth: {
            md: 800,
          },
        }}
      >
        <HistoryList />
      </Box>
    </Container>
  );
}
