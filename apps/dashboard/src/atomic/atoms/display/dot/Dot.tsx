import { DotColor } from "solarx-types";
import { Box, useTheme } from "@mui/material";

export interface IDotProps {
  color?: DotColor;
}

export default function Dot({ color = "default" }: IDotProps) {
  const theme = useTheme();
  const colorMap = {
    default: theme.palette.text.primary,
    cash: theme.custom.cash,
    red: theme.custom.red,
    sxp: theme.custom.sxp,
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
