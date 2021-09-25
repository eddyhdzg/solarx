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
import { Box, useTheme, alpha } from "@mui/material";
import { formatMoney, formatNumber } from "utils";
import { demoWalletData } from "constant";

export default function WalletChart() {
  const data = useMemo(() => {
    return demoWalletData.map((col) => {
      return { ...col, "Total Balance": col.Cash + col.Stocks };
    });
  }, []);

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.spacing(50),
      }}
    >
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
              backgroundColor: alpha(theme.palette.background.default, 0.85),
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
    </Box>
  );
}
