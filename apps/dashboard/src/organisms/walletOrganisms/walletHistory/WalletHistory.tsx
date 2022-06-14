import { Typography } from "@mui/material";
import { Dot } from "atomic";
import { useUserHistory, useDisplayUserHistory } from "hooks";
import { useUser } from "reactfire";
import { useTranslation } from "react-i18next";
import Styled from "./WalletHistory.styled";

export default function WalletHistory() {
  const user = useUser();
  const { data } = useUserHistory(user.data?.uid || "");
  const displayUserHistory = useDisplayUserHistory(data);
  const { t } = useTranslation();

  return (
    <Styled.Paper>
      <Styled.Title variant="subtitle1">
        {t("pages.wallet.history.history")}
      </Styled.Title>
      {displayUserHistory.map(([month, transactions]) => {
        return (
          <Styled.Month key={month}>
            <Styled.MonthTitle variant="subtitle2" color="textSecondary">
              {month}
            </Styled.MonthTitle>
            <ul>
              {transactions.map((transaction) => {
                return (
                  <Styled.Li key={transaction.date}>
                    <Styled.DescriptionContainer>
                      <Dot color={transaction.color} />
                      <Styled.DescriptionTexts>
                        <Styled.DescriptionTitle variant="subtitle2">
                          {transaction.title}
                        </Styled.DescriptionTitle>
                        <Styled.Description
                          variant="body3"
                          color="textSecondary"
                        >
                          {transaction.description}
                        </Styled.Description>
                      </Styled.DescriptionTexts>
                    </Styled.DescriptionContainer>
                    <Styled.DataContainer>
                      <Styled.Chip
                        size="small"
                        label={transaction.value}
                        variant={transaction.color}
                      />
                      <Typography
                        variant="body3"
                        color="textSecondary"
                        noWrap
                        sx={{
                          textTransform: "capitalize",
                        }}
                      >
                        {transaction.date}
                      </Typography>
                    </Styled.DataContainer>
                  </Styled.Li>
                );
              })}
            </ul>
          </Styled.Month>
        );
      })}
    </Styled.Paper>
  );
}
