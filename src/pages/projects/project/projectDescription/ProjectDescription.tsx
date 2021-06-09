import { Divider, Typography } from "@material-ui/core";
import { GradientLinearProgress } from "components";
import ProjectDataList from "../projectDataList/ProjectDataList";
import useStyles from "./projectDescription.jss";

export default function ProjectDescription() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.project_subSection}>
        <div className={classes.project_progressText}>
          <Typography variant="h4">28%</Typography>
          <Typography variant="body1" color="textSecondary">
            281 / 1,000 Shares
          </Typography>
        </div>
        <GradientLinearProgress value={40} />
      </div>
      <div className={classes.project_subSection}>
        <Typography variant="h5">2,248,000 MXN Raised</Typography>
        <Typography variant="body1" color="textSecondary">
          80,000,000 MXN Goal
        </Typography>
      </div>
      <div className={classes.project_subSection}>
        <Typography variant="h5">112</Typography>
        <Typography variant="body1" color="textSecondary">
          Investors
        </Typography>
      </div>
      <Divider className={classes.project_divider} />
      <ProjectDataList />
    </>
  );
}
