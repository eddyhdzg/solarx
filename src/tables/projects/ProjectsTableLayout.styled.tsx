import { styled, Button, ButtonProps, Tooltip } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";
import { ProjectSection } from "types";

export const ActionsContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "section",
})(({ theme }) => (props: { section: ProjectSection }) => ({
  display: "flex",
  alignItems: "flex-end",
  flexWrap: "wrap",
  marginBottom: theme.spacing(1.5),
  justifyContent:
    props.section === "admin/projects" ? "space-between" : "flex-end",
}));

export const StyledButton = styled(
  (
    props: ButtonProps & {
      section: ProjectSection;

      component: typeof Link;
      to: LinkProps["to"];
    }
  ) => <Button {...props} />,
  {
    shouldForwardProp: (prop) => prop !== "section",
  }
)(({ theme, section }) => ({
  marginRight: theme.spacing(2),
  display: section === "crowdfunding" ? "none" : undefined,
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
