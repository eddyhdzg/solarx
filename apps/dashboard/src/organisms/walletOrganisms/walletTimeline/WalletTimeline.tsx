import { useState, useMemo } from "react";
import { Button, Typography, ButtonGroup } from "@mui/material";
import { Timespan } from "solarx-types";
import { timespans, secondsHash } from "constant";
import { useBreakpoint, useCurrUserTransactions } from "hooks";
import { formatStock1M, formatStock1Y, getFirebseTime } from "utils";
import { useTranslation } from "react-i18next";
import WalletChart from "./walletTimelineChart/WalletTimelineChart";
import {
  Paper,
  Header,
  ButtonGroupContainer,
  TitleContainer,
} from "./WalletTimeline.styled";

export default function WalletTimeline() {
  const [timespan, setTimespan] = useState<Timespan>("H");
  const xs = useBreakpoint("xs");
  const { data } = useCurrUserTransactions("asc");
  const { t } = useTranslation();

  const handleChange = (newTimespan: Timespan) => {
    setTimespan(newTimespan);
  };

  const chartData = useMemo(() => {
    const today = new Date().getTime();
    let maxDif = 0;

    const filteredData = data.filter((value) => {
      const firebaseTime = getFirebseTime(value.date);
      return today - firebaseTime < secondsHash[timespan];
    });

    if (filteredData.length) {
      maxDif =
        getFirebseTime(filteredData[filteredData.length - 1]?.date) -
        getFirebseTime(filteredData[0]?.date);
    }

    return filteredData.map(({ date, ...col }) => {
      let name = "";

      if (maxDif < secondsHash["3M"]) {
        name = formatStock1M(date?.seconds || 0);
      } else {
        name = formatStock1Y(date?.seconds || 0);
      }

      return {
        name,
        [t("pages.wallet.timeline.cash")]: col?.cash,
        [t("pages.wallet.timeline.shares")]: col?.stocks,
        [t("pages.wallet.timeline.solarXPoints")]: col?.sxp,
        [t("pages.wallet.timeline.totalBalance")]: col?.total,
      };
    });
  }, [data, timespan, t]);

  return (
    <Paper>
      <Header>
        <TitleContainer>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 1,
              mr: 2,
            }}
          >
            {t("pages.wallet.timeline.timeline")}
          </Typography>
        </TitleContainer>
        <ButtonGroupContainer>
          <ButtonGroup
            variant="outlined"
            aria-label="timespan button group"
            color="secondary"
            size={xs ? "medium" : "small"}
          >
            {timespans.map(({ value, text }) => {
              return (
                <Button
                  key={value}
                  color={timespan === value ? "inherit" : "secondary"}
                  onClick={() => handleChange(value)}
                >
                  {t(`pages.wallet.timeline.${text}`)}
                </Button>
              );
            })}
          </ButtonGroup>
        </ButtonGroupContainer>
      </Header>
      <WalletChart data={chartData} />
    </Paper>
  );
}
