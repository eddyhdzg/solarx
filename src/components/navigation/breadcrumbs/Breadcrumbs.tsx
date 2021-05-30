import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@material-ui/core";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import { useBreadcrumbs, useCopywriting } from "hooks";
import useStyles from "./breadcrumbs.jss";

const Breadcrumbs: React.FC = () => {
  const classes = useStyles();
  const breadcrumbs = useBreadcrumbs();
  const copy = useCopywriting();

  if (!breadcrumbs.length)
    return (
      <Typography color="textPrimary" className={classes.breadcrumb_li} noWrap>
        Error
      </Typography>
    );

  return (
    <MUIBreadcrumbs
      separator={<NavigateNextRoundedIcon fontSize="small" />}
      aria-label="breadcrumb"
      classes={{
        ol: classes.breadcrumb_ol,
        li: classes.breadcrumb_li,
      }}
    >
      {breadcrumbs.map(({ href, breadcrumb }, index) => {
        const last = index === breadcrumbs.length - 1;
        return (
          <Typography
            color={last ? "textPrimary" : "textSecondary"}
            key={href}
            noWrap
          >
            {copy.router[breadcrumb]}
          </Typography>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
