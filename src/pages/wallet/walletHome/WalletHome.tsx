import { useEffect } from "react";
import { Seo, PageTitle } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { Grid } from "@material-ui/core";
import WalletSummary from "../walletSummary/WalletSummary";
import WalletShares from "../walletShares/WalletShares";
import WalletChart from "../walletChart/WalletChart";

export default function WalletHome() {
  const { t } = useTranslation();

  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo
        title={t("pages.wallet.title")}
        description={t("pages.wallet.description")}
      />
      <PageTitle>
        {t("pages.wallet.title", {
          postProcess: "capitalize",
        })}
      </PageTitle>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <WalletSummary />
            </Grid>
            <Grid item xs={12}>
              <WalletChart />
            </Grid>
            <Grid item xs={12}>
              <WalletShares />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </>
  );
}
