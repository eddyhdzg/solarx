import { Paper, Typography } from "@mui/material";
import { WalletPanelsTable } from "components";
import { useCurrUserPanels } from "hooks";
import { useTranslation } from "react-i18next";

export default function WalletPanels() {
  const { data } = useCurrUserPanels();
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        p: 1,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          pt: 2,
          px: 2,
          pb: 1,
        }}
      >
        {t("pages.wallet.sections.panels")}
      </Typography>
      <WalletPanelsTable rows={data} />
    </Paper>
  );
}
