import { Box, Theme } from "@mui/material";

export interface IDotProps {
  color?: "default" | "deposit" | "red";
}

export default function Dot({ color = "default" }: IDotProps) {
  const colorMap = {
    default: (theme: Theme) => theme.palette.text.primary,
    deposit: (theme: Theme) => theme.custom.cash,
    red: (theme: Theme) => theme.palette.error.main,
  };

  return (
    <Box
      component="span"
      sx={{
        mr: 1,
        p: 0.5,
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: colorMap[color],
      }}
    />
  );
}
