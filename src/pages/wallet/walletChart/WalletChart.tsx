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
import { useMemo } from "react";
import { useTheme } from "@material-ui/core";
import { formatMoney, formatNumber } from "utils";
import useStyles from "./walletChart.jss";

const demoData: {
  name: string;
  Stocks: number;
  Cash: number;
}[] = [
  {
    name: "Oct. 2010",
    Stocks: 0,
    Cash: 0,
  },
  {
    name: "Jan. 2020",
    Stocks: 10200,
    Cash: 411.22,
  },
  {
    name: "Apr. 2020",
    Stocks: 10200,
    Cash: 841.87,
  },
  {
    name: "Jul. 2020",
    Stocks: 10200,
    Cash: 1291.11,
  },
  {
    name: "Oct. 2020",
    Stocks: 10200,
    Cash: 1803.7,
  },
  {
    name: "Jan. 2021",
    Stocks: 10200,
    Cash: 2219.45,
  },
  {
    name: "Apr. 2021",
    Stocks: 10200,
    Cash: 2613.18,
  },
  {
    name: "Jul 2021",
    Stocks: 10200,
    Cash: 3043.96,
  },
];

export default function WalletChart() {
  const classes = useStyles();
  const data = useMemo(() => {
    return demoData.map((col) => {
      return { ...col, "Total Balance": col.Cash + col.Stocks };
    });
  }, []);

  const theme = useTheme();

  return (
    <div className={classes.walletChart_root}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            left: 8,
            top: 24,
            bottom: 24,
            right: 8,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis
            orientation="right"
            tickFormatter={(value) => formatNumber(value)}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1B1B1BF0",
              borderRadius: theme.spacing(0.5),
              borderColor: theme.palette.divider,
            }}
            formatter={(value: number) => formatMoney(value)}
          />

          <Legend />
          <Line
            type="monotone"
            dataKey="Total Balance"
            stroke={theme.custom.totalBalance}
            activeDot={{ r: 6 }}
            dy={100}
          />
          <Line
            type="monotone"
            dataKey="Stocks"
            stroke={theme.custom.stocks}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Cash"
            stroke={theme.custom.cash}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
