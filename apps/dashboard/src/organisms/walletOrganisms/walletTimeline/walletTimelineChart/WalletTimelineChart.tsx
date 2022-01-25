import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { formatMoney, formatUnits } from "utils";
import { useTranslation } from "react-i18next";
import { MoneyType } from "solarx-types";
import {
  WalletChartRoot,
  lineChartMargins,
  useWalletChartStyles,
} from "./WalletTimelineChart.styled";

interface IWalletChartProps {
  data: {
    name?: string;
    Cash?: number;
    Stocks?: number;
    "SolarX Points"?: number;
    "Total Balance"?: number;
  }[];
}

export default function WalletTimelineChart({ data }: IWalletChartProps) {
  const { tooltipContentStyle, totalBalance, sxp, stocks, cash } =
    useWalletChartStyles();
  const { t } = useTranslation();

  const [hide, setHide] = useState({
    [t("pages.wallet.timeline.cash")]: false,
    [t("pages.wallet.timeline.shares")]: false,
    [t("pages.wallet.timeline.solarXPoints")]: false,
    [t("pages.wallet.timeline.totalBalance")]: false,
  });

  const [opacity, setOpacity] = useState({
    [t("pages.wallet.timeline.cash")]: 1,
    [t("pages.wallet.timeline.shares")]: 1,
    [t("pages.wallet.timeline.solarXPoints")]: 1,
    [t("pages.wallet.timeline.totalBalance")]: 1,
  });

  const handleMouseEnter = ({ dataKey }: any) => {
    setOpacity({
      [t("pages.wallet.timeline.cash")]: 0.3,
      [t("pages.wallet.timeline.shares")]: 0.3,
      [t("pages.wallet.timeline.solarXPoints")]: 0.3,
      [t("pages.wallet.timeline.totalBalance")]: 0.3,
      [dataKey]: 1,
    });
  };

  const handleMouseLeave = () => {
    setOpacity({
      [t("pages.wallet.timeline.cash")]: 1,
      [t("pages.wallet.timeline.shares")]: 1,
      [t("pages.wallet.timeline.solarXPoints")]: 1,
      [t("pages.wallet.timeline.totalBalance")]: 1,
    });
  };

  const handleClick = ({ dataKey }: any) => {
    setHide({ ...hide, [dataKey]: !hide[dataKey as MoneyType] });
  };

  return (
    <WalletChartRoot>
      <ResponsiveContainer>
        <LineChart data={data} margin={lineChartMargins}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis
            orientation="right"
            tickFormatter={(value) => formatUnits(value)}
          />
          <Tooltip
            contentStyle={tooltipContentStyle}
            formatter={(value: number) => formatMoney(value)}
          />
          <Legend
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          <Line
            type="monotone"
            dataKey={t("pages.wallet.timeline.totalBalance")}
            stroke={totalBalance}
            activeDot={{ r: 6 }}
            strokeOpacity={opacity[t("pages.wallet.timeline.totalBalance")]}
            hide={hide[t("pages.wallet.timeline.totalBalance")]}
          />
          <Line
            type="monotone"
            dataKey={t("pages.wallet.timeline.shares")}
            stroke={stocks}
            activeDot={{ r: 6 }}
            strokeOpacity={opacity[t("pages.wallet.timeline.shares")]}
            hide={hide[t("pages.wallet.timeline.shares")]}
          />
          <Line
            type="monotone"
            dataKey={t("pages.wallet.timeline.cash")}
            stroke={cash}
            activeDot={{ r: 6 }}
            strokeOpacity={t("pages.wallet.timeline.cash")}
            hide={hide[t("pages.wallet.timeline.cash")]}
          />
          <Line
            type="monotone"
            dataKey={t("pages.wallet.timeline.solarXPoints")}
            stroke={sxp}
            activeDot={{ r: 6 }}
            strokeOpacity={t("pages.wallet.timeline.solarXPoints")}
            hide={hide[t("pages.wallet.timeline.solarXPoints")]}
          />
        </LineChart>
      </ResponsiveContainer>
    </WalletChartRoot>
  );
}
