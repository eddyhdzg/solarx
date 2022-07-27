import { styled, Tooltip } from "@mui/material";

export const ActionsContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "section",
})(({ theme }) => () => ({
  display: "flex",
  alignItems: "flex-end",
  flexWrap: "wrap",
  marginBottom: theme.spacing(1.5),
  justifyContent: "flex-end",
}));

export const ActionsWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexWrap: "wrap",
}));

export const InputsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "&>:not(:last-child)": {
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(1),
    },
  },
}));

export const StyledTooltip = styled(Tooltip)({
  textTransform: "capitalize",
});
