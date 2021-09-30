import { Typography } from "@mui/material";
import { Dot } from "components";
import { demoTransactions } from "constant";
import {
  WalletHistoryPaper,
  Title,
  MonthContainer,
  MonthTypography,
  TransactionContainer,
  DescriptionContainer,
  DataContainer,
  StyledChip,
  DescriptionTexts,
  Description,
  DescriptionTitle,
} from "./WalletHistory.styled";

export default function WalletHistory() {
  return (
    <WalletHistoryPaper>
      <Title variant="subtitle1">History</Title>
      {demoTransactions.map((month) => {
        return (
          <MonthContainer key={month.month}>
            <MonthTypography variant="subtitle2" color="textSecondary">
              {month.month}
            </MonthTypography>
            <ul>
              {month.transactions.map((transaction) => {
                return (
                  <TransactionContainer key={transaction.date}>
                    <DescriptionContainer>
                      <Dot color={transaction.color} />
                      <DescriptionTexts>
                        <DescriptionTitle variant="subtitle2">
                          {transaction.title}
                        </DescriptionTitle>
                        <Description variant="body3" color="textSecondary">
                          {transaction.description}
                        </Description>
                      </DescriptionTexts>
                    </DescriptionContainer>
                    <DataContainer>
                      <StyledChip
                        size="small"
                        label={transaction.value}
                        variant={transaction.color}
                      />
                      <Typography variant="body3" color="textSecondary">
                        {transaction.date}
                      </Typography>
                    </DataContainer>
                  </TransactionContainer>
                );
              })}
            </ul>
          </MonthContainer>
        );
      })}
    </WalletHistoryPaper>
  );
}
