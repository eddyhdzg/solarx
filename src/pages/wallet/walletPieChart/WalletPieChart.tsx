import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useWalletChartStyles } from "../walletChart/WalletChart.styled";
import { Root } from "./WalletPieChart.styled";
import { demoWalletData } from "constant";

export default function WalletPieChart() {
  const { cash, totalBalance, stocks } = useWalletChartStyles();

  const COLORS = {
    Stocks: stocks,
    Cash: cash,
    "SolarX Points": totalBalance,
  };

  const data = useMemo(() => {
    const { nanoseconds, ...rest } = demoWalletData[demoWalletData.length - 1];
    return Object.entries(rest).map(([name, value]) => ({
      name,
      value,
    }));
  }, []);

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
              return (
                <Cell
                  key={`cell-${index}`}
                  // @ts-ignore
                  fill={COLORS[entry.name]}
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Root>
  );
}
