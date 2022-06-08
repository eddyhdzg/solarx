import { Box, useTheme } from "@mui/material";

// FIXME
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

  return (
    <Box
      sx={{
        p: 0.5,
        mr: 1.5,
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: colorMap[color],
      }}
    />
  );
}
