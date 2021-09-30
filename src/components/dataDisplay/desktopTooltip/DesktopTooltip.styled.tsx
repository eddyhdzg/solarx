import { styled, Tooltip, tooltipClasses } from "@mui/material";

export const DesktopTooltipRoot = styled(Tooltip)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    borderWidth: 2,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
}));
