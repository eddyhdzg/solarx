import { useMemo } from "react";
import { Typography } from "@mui/material";
import { formatMoney } from "utils";
import { Dot } from "components";
import {
  StyledPaper,
  TitleContainer,
  ChartContainer,
  StyledLi,
  StyledLabel,
  Content,
  FlexGrid,
  StyledUl,
} from "./WalletSummary.styled";
import WalletPieChart from "../walletPieChart/WalletPieChart";
import { demoWalletData } from "constant";

export default function WalletSummary() {
  const data = useMemo(() => {
    const lastCol = demoWalletData[demoWalletData.length - 1];
    return {
      ...lastCol,
      "Total Balance": lastCol.Cash + lastCol.Stocks + lastCol["SolarX Points"],
    };
  }, []);

  return (
    <StyledPaper>
      <Content>
        <TitleContainer>
          <Typography variant="h4">
            {formatMoney(data["Total Balance"])}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Total Balance
          </Typography>
        </TitleContainer>
        <FlexGrid>
          <ChartContainer>
            <WalletPieChart />
          </ChartContainer>

          <StyledUl>
            <StyledLi>
              <StyledLabel>
                <Dot color="stocks" />
                <Typography variant="body2" color="textSecondary">
                  Stocks
                </Typography>
              </StyledLabel>
              <Typography variant="h6">
                {formatMoney(data["Stocks"])}
              </Typography>
            </StyledLi>
            <StyledLi>
              <StyledLabel>
                <Dot color="deposit" />
                <Typography variant="body2" color="textSecondary">
                  Cash
                </Typography>
              </StyledLabel>
              <Typography variant="h6">{formatMoney(data["Cash"])}</Typography>
            </StyledLi>
            <StyledLi>
              <StyledLabel>
                <Dot color="totalBalance" />
                <Typography variant="body2" color="textSecondary">
                  SolarX Points
                </Typography>
              </StyledLabel>
              <Typography variant="h6">
                {formatMoney(data["SolarX Points"])}
              </Typography>
            </StyledLi>
          </StyledUl>
        </FlexGrid>
      </Content>
    </StyledPaper>
  );
}
