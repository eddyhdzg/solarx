import { styled, Button, Tooltip } from "@mui/material";
import { ProjectSection } from "types";

export const ActionsContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "section",
})(({ theme }) => (props: { section: ProjectSection }) => ({
  display: "flex",
  alignItems: "flex-end",
  flexWrap: "wrap",
  marginBottom: theme.spacing(1),
  justifyContent:
    props.section === "admin/projects" ? "space-between" : "flex-end",
}));

export const StyledButton = styled(Button)(
  ({ theme }) =>
    (props: { section: ProjectSection }) => ({
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(1),
      display: props.section === "crowdfunding" ? "none" : undefined,
    })
) as any;

export const ActionsWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexWrap: "wrap",
});

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
