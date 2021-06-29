import { Divider, Typography } from "@material-ui/core";
import { GradientLinearProgress } from "components";
import useStyles from "./projectDescription.jss";
import { Project } from "types";
import { formatPercentage, formatNumber, formatMoney } from "utils";

type IProjectDescription = Partial<
  Pick<Project, "sharesSold" | "totalShares" | "sharePrice">
>;

export default function ProjectDescription({
  sharesSold = 0,
  totalShares = 0,
  sharePrice = 0,
}: IProjectDescription) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.project_subSection}>
        <div className={classes.project_progressText}>
          <Typography variant="h4">
            {formatPercentage((sharesSold / totalShares) * 100)}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {formatNumber(sharesSold)} / {formatNumber(totalShares)} Shares
          </Typography>
        </div>
        <GradientLinearProgress value={40} />
      </div>
      <div className={classes.project_subSection}>
        <Typography variant="h5">
          {formatMoney(sharePrice * sharesSold)} Raised
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {formatMoney(sharePrice * totalShares)} Goal
        </Typography>
      </div>
      <div className={classes.project_subSection}>
        <Typography variant="h5">{formatNumber(112)}</Typography>
        <Typography variant="body1" color="textSecondary">
          Investors
        </Typography>
      </div>
      <Divider className={classes.project_divider} />
    </>
  );
}
