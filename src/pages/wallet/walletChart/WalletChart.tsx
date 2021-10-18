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
import { formatMoney, formatNumber } from "utils";
import {
  WalletChartRoot,
  lineChartMargins,
  useWalletChartStyles,
} from "./WalletChart.styled";
import { MoneyType } from "types";

interface IWalletChartProps {
  data: {
    name: string;
    "Total Balance": number;
    Stocks: number;
    Cash: number;
    "SolarX Points": number;
  }[];
}

export default function WalletChart({ data }: IWalletChartProps) {
  const { tooltipContentStyle, totalBalance, stocks, cash } =
    useWalletChartStyles();

  const [hide, setHide] = useState({
    "Total Balance": false,
    Cash: false,
    Stocks: false,
    "SolarX Points": false,
  });

  const [opacity, setOpacity] = useState({
    "Total Balance": 1,
    Cash: 1,
    Stocks: 1,
    "SolarX Points": 1,
  });

  const handleMouseEnter = ({ dataKey }: any) => {
    setOpacity({
      "Total Balance": 0.3,
      Cash: 0.3,
      Stocks: 0.3,
      "SolarX Points": 0.3,
      [dataKey]: 1,
    });
  };

  const handleMouseLeave = () => {
    setOpacity({ "Total Balance": 1, Cash: 1, Stocks: 1, "SolarX Points": 1 });
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
            tickFormatter={(value) => formatNumber(value)}
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
            dataKey="Total Balance"
            stroke={"#fff"}
            activeDot={{ r: 6 }}
            strokeOpacity={opacity["Total Balance"]}
            hide={hide["Total Balance"]}
          />
          <Line
            type="monotone"
            dataKey="Stocks"
            stroke={stocks}
            activeDot={{ r: 6 }}
            strokeOpacity={opacity["Stocks"]}
            hide={hide["Stocks"]}
          />
          <Line
            type="monotone"
            dataKey="Cash"
            stroke={cash}
            activeDot={{ r: 6 }}
            strokeOpacity={opacity["Cash"]}
            hide={hide["Cash"]}
          />
          <Line
            type="monotone"
            dataKey="SolarX Points"
            stroke={totalBalance}
            activeDot={{ r: 6 }}
            strokeOpacity={opacity["SolarX Points"]}
            hide={hide["SolarX Points"]}
          />
        </LineChart>
      </ResponsiveContainer>
    </WalletChartRoot>
  );
}