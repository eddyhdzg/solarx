import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageTitle, HistoryList } from "components";

export default function HistoryTemplate() {
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="2xl">
        <PageTitle>{t("pages.more.history.history")}</PageTitle>
      </Container>
      <Box
        sx={{
          maxWidth: "800px",
        }}
      >
        <HistoryList />
      </Box>
    </>
  );
}
