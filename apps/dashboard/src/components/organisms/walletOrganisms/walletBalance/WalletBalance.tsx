import {
  Paper,
  List,
  ListItemAvatar,
  LinearProgress,
  linearProgressClasses,
  alpha,
} from "@mui/material";
import { useCurrUserWallet } from "hooks";
import { formatMoney } from "utils";
import { useTranslation } from "react-i18next";
import Styled, { Color } from "./WalletBalance.styled";

export default function WalletBalance() {
  const { data = {} } = useCurrUserWallet();
  const { cash = 0, panels = 0, sxp = 0, total = 1 } = data;
  const { t } = useTranslation();

  const map: {
    color: Color;
    primary: string;
    secondary: string;
    value: number;
    Icon: React.FC;
  }[] = [
    {
      color: "panels",
      primary: data ? formatMoney(panels) : "-",
      secondary: t("common.panels"),
      value: (panels / total) * 100,
      Icon: Styled.ShowChartIcon,
    },
    {
      color: "cash",
      primary: data ? formatMoney(cash) : "-",
      secondary: t("pages.wallet.timeline.cash"),
      value: (cash / total) * 100,
      Icon: Styled.PaymentsIcon,
    },
    {
      color: "sxp",
      primary: data ? formatMoney(sxp) : "-",
      secondary: t("pages.wallet.timeline.solarXPoints"),
      value: (sxp / total) * 100,
      Icon: Styled.StarsIcon,
    },
  ];

  return (
    <Paper>
      <Styled.Title variant="subtitle1">
        {t("pages.wallet.balances.balances")}
      </Styled.Title>
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
