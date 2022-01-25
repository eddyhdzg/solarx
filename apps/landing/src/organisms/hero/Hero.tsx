import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Title } from "./Hero.styled";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: {
          xxs: 10,
          xs: 12,
        },
        mb: 6,
      }}
    >
      <Title variant="h1" component="h2" className="gradient-text glow">
        {t("translation:pages.landing.comingSoon")}
      </Title>
      <Typography variant="h6">
        {t("translation:pages.landing.investInSolarEnergy")}
      </Typography>
    </Box>
  );
}
