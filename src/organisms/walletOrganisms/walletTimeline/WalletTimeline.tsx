import { useState, useMemo } from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { Timespan } from "types";
import { timespans, secondsHash } from "constant";
import { useBreakpoint, useCurrUserTransactions } from "hooks";
import { formatStock1M, formatStock1Y, getFirebseTime } from "utils";
import WalletChart from "./walletTimelineChart/WalletTimelineChart";
import Styled from "./WalletTimeline.styled";

export default function WalletTimeline() {
  const [timespan, setTimespan] = useState<Timespan>("H");
  const xs = useBreakpoint("xs");
  const { data } = useCurrUserTransactions("asc");

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
        Cash: col?.cash,
        Stocks: col?.stocks,
        "SolarX Points": col?.sxp,
        "Total Balance": col?.total,
      };
    });
  }, [data, timespan]);

  return (
    <Styled.Paper>
      <Styled.ButtonGroupContainer>
        <Typography variant="subtitle1">Timeline</Typography>
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
                {text}
              </Button>
            );
          })}
        </ButtonGroup>
      </Styled.ButtonGroupContainer>
      <WalletChart data={chartData} />
    </Styled.Paper>
  );
}
