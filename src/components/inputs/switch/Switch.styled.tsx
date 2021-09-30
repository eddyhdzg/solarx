import { styled } from "@mui/material/styles";
import { Switch, switchClasses } from "@mui/material";

export const IOSStyledSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  margin: theme.spacing(1),
  [`& .${switchClasses.switchBase}`]: {
    padding: 0,
    margin: 2,
    transitionDuration: theme.transitions.duration.short,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.warning.light,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: theme.palette.warning.main,
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.3,
    },
  },
  [`& .${switchClasses.thumb}`]: {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  [`& .${switchClasses.track}`]: {
    borderRadius: 13,
    backgroundColor: "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
    }),
  },
}));
