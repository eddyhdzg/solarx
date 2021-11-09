import { useTheme } from "@mui/material";
import { DotRoot } from "./Dot.styled";

export interface IDotProps {
  color?: "default" | "green" | "red" | "stocks" | "totalBalance";
}

export default function Dot({ color = "default" }: IDotProps) {
  const theme = useTheme();
  const colorMap = {
    default: theme.palette.text.primary,
    green: theme.custom.cash,
    red: theme.palette.error.main,
    stocks: theme.custom.stocks,
    totalBalance: theme.custom.totalBalance,
  };

  return <DotRoot backgroundColor={colorMap[color]} />;
}
