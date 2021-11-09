import {
  Paper,
  List,
  ListItemAvatar,
  LinearProgress,
  linearProgressClasses,
  alpha,
} from "@mui/material";
import { useCurrUserPrivateData } from "hooks";
import { formatMoney } from "utils";
import Styled, { Color } from "./WalletBalance.styled";

export default function WalletBalance() {
  const { data } = useCurrUserPrivateData();
  const { cash = 0, stocks = 0, sxp = 0, total = 1 } = data || {};

  const map: {
    color: Color;
    primary: string;
    secondary: string;
    value: number;
    Icon: React.FC;
  }[] = [
    {
      color: "stocks",
      primary: data ? formatMoney(stocks) : "-",
      secondary: "Stocks",
      value: (stocks / total) * 100,
      Icon: Styled.ShowChartIcon,
    },
    {
      color: "cash",
      primary: data ? formatMoney(cash) : "-",
      secondary: "Cash",
      value: (cash / total) * 100,
      Icon: Styled.PaymentsIcon,
    },
    {
      color: "sxp",
      primary: data ? formatMoney(sxp) : "-",
      secondary: "SolarX Points",
      value: (sxp / total) * 100,
      Icon: Styled.StarsIcon,
    },
  ];

  return (
    <Paper>
      <Styled.Title variant="subtitle1">My Budgets</Styled.Title>
      <List>
        {map
          .sort((a, b) => b.value - a.value)
          .map(({ Icon, ...item }) => {
            return (
              <Styled.ListItem key={item.secondary}>
                <Styled.Item color={item.color}>
                  <ListItemAvatar>
                    <Styled.Avatar color={item.color}>
                      <Icon />
                    </Styled.Avatar>
                  </ListItemAvatar>
                  <Styled.Data>
                    <Styled.ListItemTexts
                      primary={item.secondary}
                      secondary={item.primary}
                      color={item.color}
                    />
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      sx={{
                        borderRadius: 5,
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                          backgroundColor: (theme) =>
                            alpha(theme.custom[item.color], 0.16),
                        },
                        [`& .${linearProgressClasses.bar}`]: {
                          backgroundColor: (theme) => theme.custom[item.color],
                        },
                      }}
                    />
                  </Styled.Data>
                </Styled.Item>
              </Styled.ListItem>
            );
          })}
      </List>
    </Paper>
  );
}
