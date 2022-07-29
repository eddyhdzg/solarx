import { CreateNewsletterEmailForm } from "forms";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CreateNewsletterEmail() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mb: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "400px",
          width: "100%",
          mb: 2,
        }}
      >
        <CreateNewsletterEmailForm />
      </Box>
      <Typography variant="body2" color="textSecondary">
        {t("pages.landing.notifyMeWhen")}
      </Typography>
    </Box>
  );
}
