import { Box, Paper, Divider, Typography, Grid } from "@mui/material";
import { GridItem, LocaleSelect } from "components";
import { useTranslation } from "react-i18next";

export default function LocaleSection() {
  const { t } = useTranslation();

  return (
    <Paper>
      <Box
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Typography variant="subtitle1">
          {t("pages.more.preferences.language")}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Grid container spacing={3}>
          <GridItem xs={5} sm={4}>
            <Typography variant="body2">
              {t("pages.more.preferences.interfaceLanguage")}
            </Typography>
          </GridItem>
          <GridItem xs={7} sm={8}>
            <LocaleSelect fullWidth />
          </GridItem>
        </Grid>
      </Box>
    </Paper>
  );
}
