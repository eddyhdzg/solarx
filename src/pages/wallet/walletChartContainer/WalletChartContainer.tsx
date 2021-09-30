import { useState, useMemo } from "react";
import { Button, ButtonGroup } from "@mui/material";
import WalletChart from "../walletChart/WalletChart";
import {
  WalletChartContainerRoot,
  HeaderWrapper,
  TitleWrapper,
  MoneyTypography,
  StatsWrapper,
  ArrowDropUpIcon,
  StatsTypography,
  ButtonGroupContainer,
} from "./WalletChartContainer.styled";
import { Timespan } from "types";
import { demoWalletData, timespans, nanosecondsHash } from "constant";
import { useBreakpoint } from "hooks";
import { formatStock1M, formatStock1Y } from "utils";

export default function WalletChartContainer() {
  const [timespan, setTimespan] = useState<Timespan>("H");
  const xs = useBreakpoint("xs");

  const handleChange = (newTimespan: Timespan) => {
    setTimespan(newTimespan);
  };

  const data = useMemo(() => {
    const today = new Date().getTime();
    let maxDif = 0;

    const filteredData = demoWalletData.filter((value) => {
      return today - value.nanoseconds < nanosecondsHash[timespan];
    });

    if (filteredData.length) {
      maxDif =
        filteredData[filteredData.length - 1].nanoseconds -
        filteredData[0].nanoseconds;
    }

    return filteredData.map(({ nanoseconds, ...col }) => {
      let name = "";

      if (maxDif < nanosecondsHash["3M"]) {
        name = formatStock1M(nanoseconds);
      } else {
        name = formatStock1Y(nanoseconds);
      }

      return {
        ...col,
        name,
        "Total Balance": col.Cash + col.Stocks + col["SolarX Points"],
      };
    });
  }, [timespan]);

  return (
    <WalletChartContainerRoot>
      <HeaderWrapper>
        <TitleWrapper>
          <MoneyTypography variant="subtitle1">$13,443.96 MXN</MoneyTypography>
          <StatsWrapper>
            <ArrowDropUpIcon />
            <StatsTypography variant="subtitle2">
              $180.15 MXN (1.34%)
            </StatsTypography>
          </StatsWrapper>
        </TitleWrapper>

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
                  {text}
                </Button>
              );
            })}
          </ButtonGroup>
        </ButtonGroupContainer>
      </HeaderWrapper>
      <div>
        <WalletChart data={data} />
      </div>
    </WalletChartContainerRoot>
  );
}
