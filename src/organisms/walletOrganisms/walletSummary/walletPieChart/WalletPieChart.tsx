import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useWalletChartStyles } from "./walletChartContainer/walletChart/WalletChart.styled";
import { Root } from "./WalletPieChart.styled";
import { demoTransactions2, CurrencyType } from "constant";

interface Test {
  name: CurrencyType;
  value: number;
}

export default function WalletPieChart() {
  const { totalBalance, stocks } = useWalletChartStyles();

  const COLORS: {
    [key in CurrencyType]: string;
  } = {
    stocks: stocks,
    "solarX points": totalBalance,
  };

  const data = useMemo(() => {
    const { nanoseconds, ...rest } =
      demoTransactions2[demoTransactions2.length - 1];
    return Object.entries(rest).map(([name, value]) => {
      return {
        name,
        value,
      };
    });
  }, []) as Test[];

  return (
    <Root>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx={80}
            cy={80}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Root>
  );
}
